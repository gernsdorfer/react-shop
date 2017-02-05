import {Product} from '../models/product';
export const ADD_TO_SHELF: string = 'ADD_TO_SHELF';
export const REMOVE_PRODUCT: string = 'REMOVE_PRODUCT';
export const EDIT_PRODUCT: string = 'EDIT_PRODUCT';

export const addProduct = (product: Product) => {
    return {
        type: ADD_TO_SHELF,
        payload: product
    };
};

export const removeProduct = (productId: number) => {
    return {
        type: REMOVE_PRODUCT,
        payload: productId
    };
};

export const editProduct = (product: Product) => {
    return {
        type: EDIT_PRODUCT,
        payload: product
    };
};