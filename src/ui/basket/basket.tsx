import * as React from 'react';
import {Product} from '../../models/product';

interface Props {
    products: Array<Product>;
}

interface State {
}

export default class Basket extends React.PureComponent<Props , State> {
    render() {
        const {products} = this.props;
        return (
            <div>
                {products.map((product) => {
                    return (<div> {product.name}</div>);
                })}
            </div>

        );
    };
};