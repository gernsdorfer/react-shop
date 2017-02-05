import {Product} from '../models/product';
import {ADD_TO_BASKET} from '../actions/basket.action';

export interface Basket {
    products: Array<Product>;
}

const INITIAL_STATE = {
    products: []
};

export function basketReducer(state: Basket = INITIAL_STATE, action: {type: string; payload: Product}) {
    switch (action.type) {
        case ADD_TO_BASKET:
            return Object.assign({},state, {products: [...state.products, action.payload]});
        default:
            return state;
    }
}