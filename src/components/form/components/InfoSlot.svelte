<script>
    import { fade } from 'svelte/transition';

    export let title;
    export let description;

    const transitionParams = {
        duration: 300
    };
</script>

<style>
	.box {
        position: absolute;
        left: -5px;
        bottom: 2em;

        width: 300px;
        padding: 0.5rem;
        margin: 0 0 1em 0;
        z-index: 3;

        background-color: #ffffff;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
	}
</style>

<div class='box' transition:fade={transitionParams}>
    <h3>{title}</h3>
    <p>{description}</p>
</div>