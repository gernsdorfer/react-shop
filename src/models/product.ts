export interface Product {
    id: number;
    category: string;
    name: string;
    color: string;
    price: number;
}

export const newProduct: Product = {
    name: 'New Product',
    category: 'Lipstick',
    color: '#333',
    price: 19.99,
    id: new Date().getUTCMilliseconds()
};