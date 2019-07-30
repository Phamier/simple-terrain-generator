<script>
    let isResizing = false;
</script>

<style>
    #divider {
        flex: 0 0 0.5rem;
        height: 100%;
        position: relative;

        background-color: #6c757d;
        box-shadow: -0.2rem 0 1rem rgba(0, 0, 0, 0.5);
        cursor: e-resize;
    }

    #divider-container {
        display: flex;
        width: 100%;
        height: 100%;
    }

    #divider-container > img {
        width: 40%;
        margin: auto;

        pointer-events: none;
    }

    #divider-overlay {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;
        z-index: 1000;
    }
</style>

<div id='divider'>
    <div id='divider-container'>
        <img src='img/divider.svg' class='noselect' alt=''>
    </div>
</div>

{#if isResizing}
    <div id='divider-overlay'></div>
{/if}