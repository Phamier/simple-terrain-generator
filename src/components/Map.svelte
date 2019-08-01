<script>
    import { onMount } from 'svelte';
    import { mapParams } from '../utils/stores';
    import { updateCanvas } from '../utils/map';

    const calculateSize = (width, height) => width >= height ? 'width: 60%' : 'height: 70%';

    export let previewHeight;
    export let previewWidth;

    let width;
    let height;

    let canvas;
    let lastParams;
    let styleTag

    $:styleTag = calculateSize(width, height);

    mapParams.subscribe(async params => {
        if (params) {

            width = params.width;
            height = params.height;

            lastParams = params;

            if (canvas) {
                updateCanvas(canvas, lastParams);
            }
        }
    });

    onMount(async() => updateCanvas(canvas, lastParams));

</script>

<style>
    #map {
        max-width: 65%;
        max-height: 80%;
        margin: auto;

        image-rendering: auto;
        image-rendering: crisp-edges;
        image-rendering: pixelated;

        box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
    }
</style>

<canvas style={styleTag} id='map' bind:this={canvas}></canvas>
