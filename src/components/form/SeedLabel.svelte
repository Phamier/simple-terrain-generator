<script>
    const randomSeed = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const length = 8;

        let result= '';

        for (let i = 0; i < length; i++) {
            result += characters[Math.floor(Math.random() * characters.length)];
        }
        return result;
    }

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