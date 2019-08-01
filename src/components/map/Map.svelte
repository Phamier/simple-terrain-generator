<script>
    import { mapParams } from '../../utils/stores';

    mapParams.subscribe(params => {
        if (params) {
            console.log(params);
        }
    });

    let promise;
</script>

<style>
    #map {
        width: 50%;
        height: 50%;
        margin: auto;

        background-color: #fff;
        box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
    }
</style>

<div id='map'></div>