<script>
    import { inspectorWidth } from '../utils/stores';
    let currentWidth;
    let windowWidth;

    inspectorWidth.subscribe(value => currentWidth = value);

    $: styleTag = windowWidth < 992 ? '' : `flex: 0 0 ${currentWidth}px`;
</script>

<svelte:window bind:innerWidth={windowWidth}/>

<style>
    #inspector {
        display: flex;
        flex: 0 0 768px;
        height: 100%;

        background-color: #fff;
        box-shadow: 0 -0.2rem 1rem rgba(0, 0, 0, 0.5);
    }

    @media (min-width: 768px) {
        #inspector {
            flex: 0 0 300px;
            box-shadow: none;
        }
    }
</style>

<div style={styleTag} id='inspector'></div>