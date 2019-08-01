// Interface
export const DIVIDER_WIDTH = 10;
export const MIN_INSPECTOR_WIDTH = 405;
export const MAX_INSPECTOR_WIDTH = 650;

//Inspector
const SLIDER_FLOAT_STEP = 0.01;
export const MAP_SIDE_RANGE = {
    min: 200,
    max: 400
}

export const SCALE_RANGE = Object.freeze({
    min: 1,
    max: 10,
    step: SLIDER_FLOAT_STEP
});

export const OCTAVES_RANGE = Object.freeze({
    min: 1,
    max: 4
});

export const LACUNARITY_RANGE = Object.freeze({
    min: 1,
    max: 10,
    step: SLIDER_FLOAT_STEP
});

export const PERSISTENCE_RANGE = Object.freeze({
    min: SLIDER_FLOAT_STEP,
    max: 1,
    step: SLIDER_FLOAT_STEP
});
