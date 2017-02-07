import {Product} from '../models/product';
import { REMOVE_PRODUCT, EDIT_PRODUCT, CREATE_PRODUCT} from '../actions/shelf.action';

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
    products: [
        {
            'id': 1,
            'category': 'Lipstick',
            'name': 'Intense Red-Orange',
            'color' : '#c05261',
            'price': 19.98
        },
        {
            'id': 2,
            'category': 'Lipstick',
            'name': 'Nude Rose',
            'color' : '#b97871',
            'price': 26.98
        },
        {
            'id': 3,
            'category': 'Lipstick',
            'name': 'Electric Blue-Violet',
            'color' : '#a17fcf',
            'price': 22.98
        }
    ]
};

export function shelfReducer(state: Shelf = INITIAL_STATE, action: Action) {
    switch (action.type) {
        case CREATE_PRODUCT:
            return Object.assign({}, state, {products: [...state.products, action.payload.product]});
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