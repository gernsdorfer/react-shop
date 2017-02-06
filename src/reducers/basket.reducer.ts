import {Product} from '../models/product';
import {ADD_TO_BASKET, REMOVE_FROM_BASKET} from '../actions/basket.action';

export interface Basket {
    products: Array<Product>;
}

const INITIAL_STATE = {
    products: []
};

export function basketReducer(state: Basket = INITIAL_STATE, action: {type: string; payload: Product | number}) {
    switch (action.type) {
        case ADD_TO_BASKET:
            return Object.assign({}, state, {products: [...state.products, action.payload]});
        case REMOVE_FROM_BASKET :
            return Object.assign(
                {},
                state,
                {
                    products: state.products.filter((product, index) => action.payload !== index)
                }
            );
        default:
            return state;
    }
}