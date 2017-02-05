import * as React from 'react';
import {Product} from '../../models/product';

interface Props {
    product: Product;
    saveProduct: (product: Product) => void;
}

interface State {
}

export default class Shelf extends React.PureComponent<Props , State> {
    render() {
        const {
            product,
            saveProduct
        } = this.props;

        return (
            <div>
                Name: <input type="text" value={product.name}/> <br />
                Price: <input type="text" value={product.price} /><br />
                <button onClick={() => saveProduct(product)}>save</button>
            </div>

        );
    };
};