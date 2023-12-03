import { createFeatureSelector } from '@ngrx/store';
import { AppState } from './appstate';

export const appSelector = createFeatureSelector<AppState>('myAppState');
