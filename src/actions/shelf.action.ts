import {Product} from '../models/product';
export const CREATE_PRODUCT: string = 'CREATE_PRODUCT';
export const REMOVE_PRODUCT: string = 'REMOVE_PRODUCT';
export const EDIT_PRODUCT: string = 'EDIT_PRODUCT';

export const createProduct = (product: Product) => {
    return {
        type: CREATE_PRODUCT,
        payload: {product: product}
    };
};

export const removeProduct = (productId: number) => {
    return {
        type: REMOVE_PRODUCT,
        payload: {productId: productId}
    };
};

export const editProduct = (product: Product) => {
    return {
        type: EDIT_PRODUCT,
        payload: {product: product}
    };
};