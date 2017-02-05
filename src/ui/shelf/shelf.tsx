import * as React from 'react';
import {Product} from '../../models/product';

interface Props {
    products: Array<Product>;
    addToBasket: (product: Product) => void;
    removeFromBasket: (product: Product) => void;
}

interface State {
}

export default class Shelf extends React.PureComponent<Props , State> {
    render() {
        const {
            products,
            addToBasket,
            removeFromBasket
        } = this.props;

        return (
            <div>
                {products.map((product) => {
                    return (
                        <div key={product.id}>
                            {product.name} - {product.price}€
                            <button onClick={() => addToBasket(product)}>add to basket</button>
                            <button onClick={() => removeFromBasket(product)}>remove to basket</button>
                        </div>
                    );
                })}
            </div>

        );
    };
};