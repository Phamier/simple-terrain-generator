import SimplexNoise from 'simplex-noise';
import { Chance } from 'chance';

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

    console.log(minNoiseHeight, maxNoiseHeight);
    console.log(persistence, lacunarity);
    noiseMap.forEach((noiseHeight, index, array) => {
        array[index] = normalizeValue(noiseHeight, { min: minNoiseHeight, max: maxNoiseHeight});
    });

    return noiseMap;
}

const calculateColor = noiseHeight => {
    let r, g, b;
    if (noiseHeight <= 0.3) {
        r = 40;
        g = 132;
        b = 170;
    } else if (noiseHeight <= 0.4) {
        r = 54;
        g = 102;
        b = 198;
    } else if (noiseHeight <= 0.5) {
        r = 178;
        g = 193;
        b = 85;
    } else if (noiseHeight <= 0.55) {
        r = 86;
        g = 151;
        b = 23;
    } else if (noiseHeight <= 0.6) {
        r = 69;
        g = 119;
        b = 17;
    } else if (noiseHeight <= 0.7) {
        r = 89;
        g = 69;
        b = 60;
    } else if (noiseHeight <= 0.9) {
        r = 74;
        g = 56;
        b = 53;
    } else {
        r = 255;
        g = 255;
        b = 255;
    }

    return { r, g, b };
}

export const generateColorMap = async params => {
    const noiseMap = generateNoiseMap(params);
    const colorMap = [];

    noiseMap.forEach(noiseHeight => {
        const {r, g, b} = calculateColor(noiseHeight);
        colorMap.push(r, g, b, 255);
    });

    return colorMap;
}