import * as React from 'react';
import {Product} from '../../models/product';
import Header from '../header/header';
import './shelf.css';
import {Link} from 'react-router';

interface Props {
    products: Array<Product>;
    removeFromShelf: (productId: number) => void;
    addToShelf: () => void;
}

interface State {
}

export default class Shelf extends React.PureComponent<Props , State> {
    render() {
        const {
            products,
            removeFromShelf,
            addToShelf
        } = this.props;

        return (
            <div className="shelf shelf-admin">
                <Header
                    buttonLeft={<Link to="/"><span className="icon-back"/></Link>}
                    buttonRight={<span onClick={addToShelf} className="icon-add"/>}
                >
                    Admin
                </Header>
                {products.map((product) => {
                    return (
                        <div key={product.id} className="product">
                            <div className="color" style={{background: product.color}}/>
                            <div className="name">
                                <div className="category">
                                    {product.category}
                                </div>
                                <div>
                                    {product.name}
                                </div>
                                <a href="#0" onClick={() => removeFromShelf(product.id)}>remove from shell</a>
                            </div>
                            <div className="price">
                                {product.price}€
                            </div>
                            <Link to={`/product/edit/${product.id}`}>
                                <div className="button">
                                    <span className="icon-edit"/>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    };
};