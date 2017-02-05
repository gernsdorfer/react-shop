import {Basket, basketReducer} from './basket.reducer';
import {Shelf, shelfReducer} from './shelf.reducer';

export interface AppState {
    basket: Basket;
    shelf: Shelf;
}

export const rootReducer = {
    shelf: shelfReducer,
    basket: basketReducer
};