<script>
    import {inspectorWidth, mousePosition, resizeMode } from '../utils/stores';
    import { DIVIDER_WIDTH, MAX_INSPECTOR_WIDTH, MIN_INSPECTOR_WIDTH } from '../utils/constants';

    let isResizing = false;

    resizeMode.subscribe(value => isResizing = value);
    mousePosition.subscribe(position => {
        if (isResizing) {
            let newWidth = window.innerWidth - position.x - DIVIDER_WIDTH / 2.0;
            if (newWidth < MIN_INSPECTOR_WIDTH) {
                newWidth = MIN_INSPECTOR_WIDTH;
            } else if (newWidth > MAX_INSPECTOR_WIDTH) {
                newWidth = MAX_INSPECTOR_WIDTH;
            }

            inspectorWidth.set(newWidth);
        }
    });
</script>

<style>
    #divider {
        display: none;
        flex: none;
        height: 100%;
        position: relative;

        background-color: #6c757d;
        box-shadow: -0.2rem 0 1rem rgba(0, 0, 0, 0.5);

    }

    #divider-container {
        display: none;
        width: 100%;
        height: 100%;
        
        cursor: e-resize;
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

        cursor: col-resize;
    }

    @media (min-width: 768px) {
        #divider {
            display: block;
            flex: 0 0 0.5rem;
        }
    }

    @media (min-width: 992px) {
        #divider-container {
            display: flex;
        }
    }
</style>

<div id='divider'>
    <div id='divider-container' on:mousedown={() => resizeMode.set(true)}>
        <img src='img/divider.svg' class='noselect' alt=''>
    </div>
</div>

{#if isResizing}
    <div id='divider-overlay' on:mouseup={() => resizeMode.set(false)}></div>
{/if}