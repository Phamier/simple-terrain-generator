<script>
    import { MAP_SIDE_RANGE, SCALE_RANGE, OCTAVES_RANGE, LACUNARITY_RANGE, PERSISTENCE_RANGE } from '../../utils/constants';
    import { mapParams } from '../../utils/stores';
    import { randomSeed } from '../../utils/string';

    import NumberRange from './components/NumberRange.svelte';
    import SeedLabel from './components/SeedLabel.svelte';

    let seed = randomSeed();
    let width = 100;
    let height = 100;
    let scale = 1;
    let octaves = 2;
    let lacunarity = 2;
    let persistence = 0.5;

    const handleChange = event => {
        const properties = {
            seed,
            width,
            height,
            scale,
            octaves,
            lacunarity,
            persistence
        };

        mapParams.set(properties);
    };

    handleChange();
</script>

<style>
    #form {
        display: flex;
        flex-flow: column;
        -ms-flex-flow: column;
        position: relative;

        width: 100%;
        padding: 0 1rem;
    }

    h2 {
        margin: 0.5rem 0;
    }

    @media (min-width: 768px) {
        #form {
            padding: 0 1.5rem;
        }
    }
</style>

<div id='form'>
    <h2>Map</h2>
    <SeedLabel bind:seed={seed} on:change={handleChange}/>
    <NumberRange 
        bind:value={width} 
        property='Width' 
        description='Width of a map'
        range={MAP_SIDE_RANGE}
        on:change={handleChange}
    />
    <NumberRange
        bind:value={height}
        property='Height'
        description='Height of a map'
        range={MAP_SIDE_RANGE}
        on:change={handleChange}
    />
    <h2>Terrain</h2>
    <NumberRange
        bind:value={scale}
        property='Scale'
        description='Zoom level'
        range={SCALE_RANGE}
        on:change={handleChange}
    />
    <NumberRange
        bind:value={octaves}
        property='Octaves'
        description='One of the coherent-noise functions in a series of coherent-noise functions that are added together to form Perlin noise. These coherent-noise functions are called octaves
        The number of octaves control the amount of detail of Perlin noise. Adding more octaves increases the detail of Perlin noise, with the added drawback of increasing the calculation time.'
        range={OCTAVES_RANGE}
        on:change={handleChange}
    />
    <NumberRange
        bind:value={lacunarity}
        property='Lacunarity'
        description='A multiplier that determines how quickly the frequency increases for each successive octave'
        range={LACUNARITY_RANGE}
        on:change={handleChange}
    />
    <NumberRange
        bind:value={persistence}
        property='Persistence'
        description='A similar property to lacunarity is persistence, which modifies the octaves&#39; amplitudes'   
        range={PERSISTENCE_RANGE}
        on:change={handleChange}
    />
</div>