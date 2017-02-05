import * as React from 'react';
import {Product} from '../../models/product';
import {Link} from 'react-router';

interface Props {
    products: Array<Product>;
    removeFromShelf: (productId: number) => void;
}

interface State {
}

export default class Shelf extends React.PureComponent<Props , State> {
    render() {
        const {
            products,
            removeFromShelf
        } = this.props;

        return (
            <div>
                {products.map((product) => {
                    return (
                        <div key={product.id}>
                            {product.name} - {product.price}€
                            <button onClick={() => removeFromShelf(product.id)}>remove from shell</button>
                            <Link to={`/product/edit/${product.id}`} activeClassName='active'>edit Product</Link>
                        </div>
                    );
                })}
            </div>

        );
    };
};