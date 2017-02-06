import {Product} from '../models/product';
import {ADD_TO_SHELF, REMOVE_PRODUCT, EDIT_PRODUCT} from '../actions/shelf.action';

export interface Shelf {
    products: Array<Product>;
}
interface Action {
    type: string;
    payload: {
        product: Product,
        productId: number
    }
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

export function shelfReducer(state: Shelf = INITIAL_STATE, action: Action) {
    switch (action.type) {
        case ADD_TO_SHELF:
            return Object.assign({}, state, {products: [...state.products, action.payload.product]});
        case REMOVE_PRODUCT:
            return Object.assign(
                {},
                state,
                {
                    products: state.products.filter((product) => product.id === action.payload.productId)
                }
            );
        case EDIT_PRODUCT:
            return Object.assign(
                {},
                state,
                {
                    products: state.products.map((product) => {
                        if (product.id === action.payload.product.id) {
                            return action.payload.product;
                        }
                        return product;
                    })
                }
            );
        default:
            return state;
    }
}