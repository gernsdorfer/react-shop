import {Product} from '../models/product';
import {ADD_TO_BASKET, REMOVE_FROM_BASKET} from '../actions/basket.action';
import {EDIT_PRODUCT} from '../actions/shelf.action';

export interface Basket {
    products: Array<Product>;
}
interface Action {
    type: string;
    payload: {
        product: Product,
        productIndex: number
    };
}
const INITIAL_STATE = {
    products: []
};

export function basketReducer(state: Basket = INITIAL_STATE, action: Action) {
    switch (action.type) {
        case ADD_TO_BASKET:
            return Object.assign({}, state, {products: [...state.products, action.payload.product]});
        case REMOVE_FROM_BASKET :
            return Object.assign(
                {},
                state,
                {
                    products: state.products.filter((product, index) => action.payload.productIndex !== index)
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