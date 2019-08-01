<script>
    import Map from './map/Map.svelte';
</script>

<style>
    #preview {
        display: flex;
        width: 100%;
        height: calc(100vh - 5rem);
        min-height: calc(100vh - 5rem);

        background-color: #13202c;
    }

    @media (min-width: 992px) {
        #preview {
            min-height: 0;
            height: 100%;
        }
    }
</style>

<div id='preview'>
    <Map/>
</div>