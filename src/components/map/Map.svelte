<script>
    import { onMount } from 'svelte';
    import { mapParams } from '../../utils/stores';
    import { generateColorMap } from '../../utils/map';

    const calculateSize = (width, height) => width >= height ? 'width: 70%' : 'height: 70%';
    const updateCanvas = async (canvas, params) => {
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

    let width;
    let height;

    let canvas;
    let lastParams;

    let promise;
    let styleTag = calculateSize(width, height);

    mapParams.subscribe(async params => {
        if (params) {

            width = params.width;
            height = params.height;
            styleTag = calculateSize(width, height)

            lastParams = params;

            if (canvas) {
                updateCanvas(canvas, lastParams);
            }
        }
    });

    onMount(async() => {
        styleTag = calculateSize(width, height);
        updateCanvas(canvas, lastParams);
    });

</script>

<style>
    #map {
        max-width: 70%;
        margin: auto;

        box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
    }
</style>

<canvas style={styleTag} id='map' bind:this={canvas}></canvas>
