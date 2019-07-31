<script>
    export let value;
    export let property;
    export let range;

    let {min, max} = range;
    let step = range.step || 1;
</script>

<style>
    input[type="range"] {
        flex: 1 0;
        height: 0;
        margin: auto 0 auto 15px;
    }
</style>

<label>
    <span>{property}: </span>
    <input type='number' bind:value={value} min={min} max={max} step={step}>
    <input type='range' bind:value={value} min={min} max={max} step={step}>
</label>