<script>
    import Preview from './components/Preview.svelte';
    import Divider from './components/Divider.svelte';
    import Inspector from './components/Inspector.svelte';
    import ArrowUp from './components/ArrowUp.svelte';

    import { mousePosition } from './utils/stores';

    const trackMouse = (event) => mousePosition.set({ x: event.clientX, y: event.clientY });
</script>

<div id='app' on:mousemove={trackMouse}>
    <Preview/>
    <Divider/>
    <Inspector/>
</div>

<ArrowUp/>
