<script>
    import { randomSeed } from '../../../utils/string';

    export let seed = randomSeed();
    $: isWrong = seed === undefined || seed === '';
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