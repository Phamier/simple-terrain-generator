import { writable } from 'svelte/store';
import { MIN_INSPECTOR_WIDTH } from './constants';

export const inspectorWidth = writable(MIN_INSPECTOR_WIDTH);
export const mousePosition = writable({ x: 0, y: 0});
export const resizeMode = writable(false);
export const mapParams = writable(undefined);