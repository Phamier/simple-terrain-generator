<script>
    import { fade } from 'svelte/transition';
    import { scrollToTop } from 'svelte-scrollto';
    
    let windowWidth;
    let scrollY;

    const transitionParams = {
        duration: 250
    }
</script>

<svelte:window bind:innerWidth={windowWidth} bind:scrollY={scrollY}/>

<style>
    #arrowUp {
        display: flex;
        position: fixed;
        bottom: 1rem;
        right: 1rem;

        width: 3rem;
        height: 3rem;

        z-index: 99;
        outline: none;

        background-color: purple;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
        border-radius: 1.5rem;
        cursor: pointer;
    }

    #arrowUp > img {
        width: 2rem;
        height: 2rem;

        margin: auto;
    }
</style>


{#if windowWidth < 768 && scrollY > windowWidth / 2 }
<div id='arrowUp' transition:fade={transitionParams} on:click={() => scrollToTop()}>
    <img src='resource/img/arrow-up.svg' alt=''>
</div>
{/if}
