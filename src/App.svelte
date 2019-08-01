<script>
    import Preview from './components/Preview.svelte';
    import Divider from './components/Divider.svelte';
    import Inspector from './components/Inspector.svelte';
    import ArrowUp from './components/ArrowUp.svelte';

    import { mousePosition } from './utils/stores';

    const trackMouse = (event) => mousePosition.set({ x: event.clientX, y: event.clientY });

    let windowWidth;
    $: if (windowWidth) {
        const viewport = document.querySelector('meta[name=viewport]');
        viewport.setAttribute('content', windowWidth < 1440 ? 'width=device-width, initial-scale=1.0' : 'width=1440px');
    }
</script>

<svelte:window bind:outerWidth={windowWidth}/>

<div id='app' on:mousemove={trackMouse}>
    <Preview/>
    <Divider/>
    <Inspector/>
</div>

<ArrowUp/>
