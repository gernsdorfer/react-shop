import * as React from 'react';
import {Product} from '../../models/product';

interface Props {
    products: Array<Product>;
    removeProduct: (productId: number) => void;
}

interface State {
}

export default class Basket extends React.PureComponent<Props , State> {
    render() {
        const {products, removeProduct} = this.props;
        return (
            <div>
                {products.map((product,index) => {
                    return (<div key={index}> {product.name} - {product.price}
                        <button onClick={() => removeProduct(index)}>remove Product</button>
                    </div>);
                })}
            </div>

        );
    };
};