import {Product} from '../models/product';
import {ADD_TO_SHELF, REMOVE_PRODUCT} from '../actions/shelf.action';

export interface Shelf {
    products: Array<Product>;
}

const INITIAL_STATE = {
    products: [
        {
            'id': 1,
            'name': 'Test Product',
            'price': 10.00
        }
    ]
};

export function shelfReducer(state: Shelf = INITIAL_STATE, action: {type: string; payload: Product}) {
    switch (action.type) {
        case ADD_TO_SHELF:
            return Object.assign({}, state, {products: [...state.products, action.payload]});
        case REMOVE_PRODUCT:
            return Object.assign(
                {},
                state,
                {
                    products: state.products.filter((product) => product.id === action.payload.id)
                }
            );
        default:
            return state;
    }
}