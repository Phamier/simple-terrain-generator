<script>
    import { inspectorWidth } from '../utils/stores';
    import Logo from './Logo.svelte';
    import Form from './form/Form.svelte';
    
    let currentWidth;
    let windowWidth;

    inspectorWidth.subscribe(value => currentWidth = value);

    $: styleTag = windowWidth < 992 ? '' : `flex: 0 0 ${currentWidth}px`;
</script>

<svelte:window bind:innerWidth={windowWidth}/>

<style>
    #inspector {
        display: flex;
        flex-direction: column;
        flex: 0 0 768px;
        height: 100%;

        background-color: #ffffff;
        box-shadow: 0 -0.5rem 1rem rgba(0, 0, 0, 0.5);
    }

    @media (min-width: 992px) {
        #inspector {
            flex: 0 0 405px;
            box-shadow: none;
            overflow-y: auto;
        }
    }
</style>

<div style={styleTag} id='inspector'>
    <Logo/>
    <Form/>
</div>