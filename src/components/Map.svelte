<script>
    import { onMount } from 'svelte';
    import { mapParams } from '../utils/stores';
    import { updateCanvas, validateParams } from '../utils/map';

    let previewHeight;
    let previewWidth;

    let width;
    let height;

    let canvas;
    let lastParams;
    let widthTag;

    $: if (width && height && previewWidth && previewHeight) {
        const ratio = width / height;
        const maxHeight = 0.8 * previewHeight;

        let sampleWidth = 0.8 * previewWidth;

        if (sampleWidth / ratio > maxHeight) {
            sampleWidth = maxHeight * ratio;
        }

        widthTag = `${sampleWidth}px`
    }

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
        margin: auto;

        image-rendering: auto;
        image-rendering: crisp-edges;
        image-rendering: pixelated;

        box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
    }

    #map-container {
        display: flex;
        width: 100%;
        height: 100%;

        position: relative;
    }
</style>

<div id='map-container' bind:clientWidth={previewWidth} bind:clientHeight={previewHeight}>
    <canvas style='width: {widthTag}' id='map' bind:this={canvas}></canvas>
</div>
