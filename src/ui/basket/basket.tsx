import * as React from 'react';
import {Product} from '../../models/product';
import Header from '../header/header';
import './basket.css';

interface Props {
    products: Array<Product>;
    removeProduct: (productId: number) => void;
}

interface State {
}

export default class Basket extends React.PureComponent<Props , State> {

    sumProducts(products: Product[]) {
        return Math.round(
                products.reduce(
                    (start, current) => start + current.price, 0
                )
                * 100
            ) / 100;
    }

    render() {
        const {products, removeProduct} = this.props;

        const sum = products.length ? <div className="sum">{this.sumProducts(products)}€</div> : null;

        return (
            <div className="basket">
                <Header buttonRight={<span className="icon-basket"/>}>
                    Basket <span className="count">{products.length}</span>
                </Header>
                {products.map((product, index) => {
                    return (
                        <div key={index} className="product">
                            <div className="name">
                                {product.name}
                            </div>
                            <div className="price">
                                {product.price}€
                            </div>
                            <div className="remove" onClick={() => removeProduct(index)}>
                                <span className="icon-remove"/>
                            </div>
                        </div>
                    );
                })}
                {sum}
            </div>

        );
    };
};
