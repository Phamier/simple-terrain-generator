<script>
    import InfoSlot from './InfoSlot.svelte';

    export let value;
    export let property;
    export let range;
    export let description;

    let {min, max} = range;
    let step = range.step || 1;

    let infoIsShown = false;
    let rangeIsShown = false;
    $: isWrong = value === undefined || value < min || value > max;

    const showInfoSlot = () => infoIsShown = true;
    const hideInfoSlot = () => infoIsShown = false;
    const showRangeSlot = () => rangeIsShown = true;
    const hideRangeSlot = () => rangeIsShown = false;
</script>

<style>
    input[type="range"] {
        flex: 0 1 100%;
        min-width: 0;
        height: 0;
        
        margin: auto 0 auto 15px;
    }

    label {
        position: relative;
    }
</style>

<label>
    {#if infoIsShown}
        <InfoSlot title='{property}' description={description}/>
    {/if}
    {#if rangeIsShown}
        <InfoSlot title='{property}' description={`Range: [${min}, ${max}]`}/>
    {/if}
    <span
        class:wrong={isWrong}
        on:focus={showInfoSlot}
        on:blur={hideInfoSlot}
        on:mouseover={showInfoSlot}
        on:mouseout={hideInfoSlot}
    >
        {property}:
    </span>

    <input
        type='number'
        bind:value={value}
        min={min} max={max}
        step={step}

        on:focus={showRangeSlot}
        on:blur={hideRangeSlot}
        on:mouseover={showRangeSlot}
        on:mouseout={hideRangeSlot}
    >

    <input
        type='range'
        bind:value={value}
        min={min}
        max={max}
        step={step}
    >
</label>