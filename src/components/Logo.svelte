<script>
</script>

<style>
    #logo {
        display: flex;
        flex-flow: row;
        -ms-flex-flow: row;

        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        min-height: 5rem;

        background-color: #3A3F44;
        box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.3);
    }

    #logo > img {
        margin: auto 0;        
        flex: 0 0 4rem;
        width: 4rem;
    }

    #logo-title {
        display: flex;
        flex: 0 1 469px;

        margin: auto;
        position: relative;
        left: 0;
        z-index: 2;

        text-align: center;
        font-size: 2rem;
        color: white;
        -webkit-text-stroke: 3.5px #000000;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #logo-title::after {
        position: absolute;
        left: 0;
        content: 'Simple Terrain Generator';
        -webkit-text-stroke: 0.8px #2C262E;
        z-index: 1;

    }

    @media (min-width: 412px) {
        #logo-title {
            font-size: 2.5rem;
            flex: 0 1 579px;
            margin: auto 0;
        }

        #logo > img {
            margin: auto 5px;
        }
    }
    
    @media (min-width: 992px) {
        #logo {
            position: relative;
            height: auto;
            max-height: 93px;
        }

        #logo-title {
            flex: 1;
        }
    }
</style>

<div id='logo'>
    <img id='logo-map' src='resource/img/logo-map.png' alt=''>
    <h1 id='logo-title' class='awesome-font'>Simple Terrain Generator</h1>
</div>