<script>
    import { inspectorWidth } from '../utils/stores';
    let currentWidth;

    inspectorWidth.subscribe(value => currentWidth = value);

    $: styleTag = `flex: 0 0 ${currentWidth}px`;
</script>

<style>
    #inspector {
        display: flex;
        flex: 0 0 300px;
        height: 100%;

        background-color: #fff;
    }
</style>

<div style={styleTag} id='inspector'></div>