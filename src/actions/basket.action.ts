import {Product} from '../models/product';
export const ADD_TO_BASKET: string = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET: string = 'REMOVE_FROM_BASKET';

export const addProductToBasket = (Product: Product) => {
    return {
        type: ADD_TO_BASKET,
        payload: Product
    };
};

export const removeProductFromBasket = (Product: Product) => {
    return {
        type: REMOVE_FROM_BASKET,
        payload: Product
    };
};