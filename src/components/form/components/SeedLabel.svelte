<script>
    import { randomSeed } from '../../../utils/string';
    import { createEventDispatcher } from 'svelte';

    export let seed;
    const dispatch = createEventDispatcher();

    $: isWrong = seed === undefined || seed === '';
    
    const sendDispatch = seed => !isWrong ? dispatch('change', { change: seed }) : undefined;
    $: sendDispatch(seed);
</script>

<style>
    button {
        margin: auto auto auto 15px;
    }
</style>

<label>
    <span class:wrong={isWrong}>Seed :</span>
    <input type='text' bind:value={seed}>
    <button on:click={() => seed = randomSeed()}>Random seed</button>
</label>