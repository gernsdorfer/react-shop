import * as React from 'react';
import {Product} from '../../models/product';
import Header from '../header/header';
import './shelf.css';
import {Link} from 'react-router';

interface Props {
    products: Array<Product>;
    addToBasket: (product: Product) => void;
}

interface State {
}

export default class Shelf extends React.PureComponent<Props , State> {
    render() {
        const {
            products,
            addToBasket
        } = this.props;

        return (
            <div className="shelf">
                <Header
                    buttonRight={<Link to="/shelf-admin"><span className="icon-settings"/></Link>}
                >
                    Products
                </Header>
                {products.map((product) => {
                    return (
                        <div key={product.id} className="product">
                            <div className="color" style={{background: product.color}}/>
                            <div className="name">
                                <div className="category">
                                    {product.category}
                                </div>
                                {product.name}
                            </div>
                            <div className="price">
                                {product.price}€
                            </div>
                            <a onClick={() => addToBasket(product)}>
                                <span className="icon-add"/>
                            </a>
                        </div>
                    );
                })}
            </div>

        );
    };
};