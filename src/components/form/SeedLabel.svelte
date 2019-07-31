<script>
    import { randomSeed } from '../../utils/string';

    export let seed = randomSeed();
</script>

<style>
    button {
        margin: auto auto auto 15px;
    }
</style>

<label>
    <span>Seed :</span>
    <input type='text' bind:value={seed}>
    <button on:click={() => seed = randomSeed()}>Random seed</button>
</label>