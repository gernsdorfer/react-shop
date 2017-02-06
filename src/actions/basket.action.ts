import {Product} from '../models/product';
export const ADD_TO_BASKET: string = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET: string = 'REMOVE_FROM_BASKET';

export const addProductToBasket = (product: Product) => {
    return {
        type: ADD_TO_BASKET,
        payload: product
    };
};

export const removeProductFromBasket = (productIndex: number) => {
    return {
        type: REMOVE_FROM_BASKET,
        payload: productIndex
    };
};