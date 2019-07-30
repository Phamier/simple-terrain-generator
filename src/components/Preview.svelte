<style>
    #preview {
        display: flex;
        width: 100%;
        min-height: 100vh;

        background-color: #13202c;
    }

    #map {
        width: 50%;
        height: 50%;
        margin: auto;

        background-color: #fff;
        box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
    }

    @media (min-width: 992px) {
        #preview {
            min-height: 0;
            height: 100%;
        }
    }
</style>

<div id='preview'>
    <div id='map'></div>
</div>