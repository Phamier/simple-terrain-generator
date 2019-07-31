<script>
    import { MAP_SIDE_RANGE, SCALE_RANGE, OCTAVES_RANGE, LACUNARITY_RANGE, PERSISTANCE_RANGE } from '../../utils/constants';

    import NumberRange from './components/NumberRange.svelte';
    import SeedLabel from './components/SeedLabel.svelte';

    let seed;
    let width = 100;
    let height = 100;
    let scale = 1;
    let octaves = 3;
    let lacunarity = 2;
    let persistance = 0.5;
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
    <SeedLabel bind:seed={seed}/>
    <NumberRange 
        bind:value={width} 
        property='Width' 
        description='Controls width of a map'
        range={MAP_SIDE_RANGE}
    />
    <NumberRange
        bind:value={height}
        property='Height'
        description='Controls height of a map'
        range={MAP_SIDE_RANGE}
    />
    <h2>Terrain</h2>
    <NumberRange
        bind:value={scale}
        property='Scale'
        range={SCALE_RANGE}
    />
    <NumberRange
        bind:value={octaves}
        property='Octaves'
        range={OCTAVES_RANGE}
    />
    <NumberRange
        bind:value={lacunarity}
        property='Lacunarity'
        range={LACUNARITY_RANGE}
    />
    <NumberRange
        bind:value={persistance}
        property='Persistance'
        range={PERSISTANCE_RANGE}
    />
</div>