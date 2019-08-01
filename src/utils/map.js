import SimplexNoise from 'simplex-noise';
import { Chance } from 'chance';

const lerp = (value, from, to) => to.min + (value - from.min) * (to.max - to.min) / (from.max - from.min);

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

    let maxNoiseHeight = Number.MAX_SAFE_INTEGER;
    let minNoiseHeight = Number.MIN_SAFE_INTEGER;

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let amplitude = 1;
            let frequency = 1;
            let noiseHeight = 0;
            
            octaveOffsets.forEach(offset => {
                const sampleX = x / scale * frequency + offset.x;
                const sampleY = y / scale * frequency + offset.y;

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
        array[index] = lerp(noiseHeight, { min: minNoiseHeight, max: maxNoiseHeight}, { min: 0, max: 1});
    });

    return noiseMap;
}

export const generateColorMap = params => {
    const { width, height } = params;
    const noiseMap = generateNoiseMap(params);

    console.log(noiseMap.length);
}