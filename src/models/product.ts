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

export const demoProducts: Product[] = [
    {
        'id': 1,
        'category': 'Lipstick',
        'name': 'Intense Red-Orange',
        'color': '#c05261',
        'price': 19.98
    },
    {
        'id': 2,
        'category': 'Lipstick',
        'name': 'Nude Rose',
        'color': '#b97871',
        'price': 26.98
    },
    {
        'id': 3,
        'category': 'Lipstick',
        'name': 'Electric Blue-Violet',
        'color': '#a17fcf',
        'price': 22.98
    },
    {
        'id': 4,
        'category': 'Lipstick',
        'name': 'Energetic Rosé',
        'color': '#f99',
        'price': 20.98
    },
    {
        'id': 5,
        'category': 'Lipstick',
        'name': 'Green Balance',
        'color': '#83c071',
        'price': 22.98
    },
    {
        'id': 6,
        'category': 'Lipstick',
        'name': 'Excessive Orange',
        'color': '#e90',
        'price': 20.98
    }
];