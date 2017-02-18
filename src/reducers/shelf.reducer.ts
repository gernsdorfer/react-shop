import {Product, demoProducts} from '../models/product';
import {REMOVE_PRODUCT, EDIT_PRODUCT, CREATE_PRODUCT} from '../actions/shelf.action';

export interface Shelf {
    products: Array<Product>;
}
interface Action {
    type: string;
    payload: {
        product: Product,
        productId: number
    };
}

const INITIAL_STATE = {
    products: demoProducts
};

export function shelfReducer(state: Shelf = INITIAL_STATE, action: Action) {
    switch (action.type) {
        case CREATE_PRODUCT:
            return Object.assign(
                {},
                state,
                {
                    products: [...state.products, action.payload.product]
                }
            );
        case REMOVE_PRODUCT:
            return Object.assign(
                {},
                state,
                {
                    products: state.products.filter((product) => product.id !== action.payload.productId)
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