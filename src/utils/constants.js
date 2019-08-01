// Interface
export const DIVIDER_WIDTH = 10;
export const MIN_INSPECTOR_WIDTH = 405;
export const MAX_INSPECTOR_WIDTH = 650;

//Inspector
const SLIDER_FLOAT_STEP = 0.01;
export const MAP_SIDE_RANGE = {
    min: 50,
    max: 250
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

// Map
export const MAP_TYPES = Object.freeze([
    { height: 0.3, color: '#143b88' },
    { height: 0.4, color: '#3666c6' },
    { height: 0.5, color: '#fefd90'},
    { height: 0.55, color: '#569717' },
    { height: 0.6, color: '#457711' },
    { height: 0.7, color: '#56453c' },
    { height: 0.9, color: '#4a3835' },
    { height: 1, color: '#ffffff' }
]);