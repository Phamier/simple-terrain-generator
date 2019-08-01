import SimplexNoise from 'simplex-noise';
import { Chance } from 'chance';
import { MAP_TYPES } from './constants';

const normalizeValue = (value, range) => (value - range.min) / (range.max - range.min) ;

const generateNoiseMap = params => {
    const { seed, width, height, scale, octaves, lacunarity, persistence } = params;

    const simplex = new SimplexNoise(seed);
    const random = new Chance(seed);

    const noiseMap = [];
    const octaveOffsets = [];

    for (let i = 0; i < octaves; i++) {
        const x  = random.integer({ min: -100000, max: 100000 });
        const y  = random.integer({ min: -100000, max: 100000 });

        octaveOffsets.push({ x, y });
    }


    const halfWidth = width / 2;
    const halfHeight = height / 2;

    let maxNoiseHeight = Number.MIN_VALUE;
    let minNoiseHeight = Number.MAX_VALUE;

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let amplitude = 1;
            let frequency = 1;
            let noiseHeight = 0;

            octaveOffsets.forEach(offset => {
                const sampleX = (x - halfWidth) / 10 / scale * frequency + offset.x;
                const sampleY = (y - halfHeight) / 10 / scale * frequency + offset.y;

                const perlinValue = simplex.noise2D(sampleX, sampleY);
                noiseHeight += perlinValue * amplitude;

                amplitude *= persistence;
                frequency *= lacunarity;
            });


            if (noiseHeight > maxNoiseHeight) {
                maxNoiseHeight = noiseHeight;
            } else if (noiseHeight < minNoiseHeight) {
                minNoiseHeight = noiseHeight;
            }

            noiseMap.push(noiseHeight);
        }
    }

    noiseMap.forEach((noiseHeight, index, array) => {
        array[index] = normalizeValue(noiseHeight, { min: minNoiseHeight, max: maxNoiseHeight});
    });

    return noiseMap;
}

const hexToRgb = hex => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

const calculateColor = noiseHeight => {
    for (let i = 0; i < MAP_TYPES.length; i++) {
        if (noiseHeight <= MAP_TYPES[i].height) {
            return hexToRgb(MAP_TYPES[i].color);
        }
    }
}

const generateColorMap = async params => {
    const noiseMap = generateNoiseMap(params);
    const colorMap = [];

    noiseMap.forEach(noiseHeight => {
        const {r, g, b} = calculateColor(noiseHeight);
        colorMap.push(r, g, b, 255);
    });

    return colorMap;
}

export const updateCanvas = async (canvas, params) => {
    const { width, height } = params;

    canvas.width = width;
    canvas.height = height;

    const colorMap = await generateColorMap(params);
    const ctx = canvas.getContext('2d');
    const imgData = ctx.createImageData(width, height);
    const data = imgData.data;

    colorMap.forEach((value, index) => {
        data[index] = value;
    });

    ctx.putImageData(imgData, 0, 0);
    ctx.imageSmoothingEnabled = false;
}