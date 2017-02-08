import * as React from 'react';
import Header from '../header/header';
import {Product} from '../../models/product';
import './product.css';
import {Link} from 'react-router';

interface Props {
    product: Product;
    saveProduct: (product: Product) => void;
}

interface State {
    product: Product;
}

export default class ProductAdmin extends React.PureComponent<Props , State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            product: {
                id: props.product.id,
                category: props.product.category,
                name: props.product.name,
                color: props.product.color,
                price: props.product.price
            }
        };
    }

    changeProduct(productProperty: 'price' | 'name' | 'category' | 'color', event: React.SyntheticEvent<HTMLInputElement>) {
        this.setState(
            {
                product: Object.assign(
                    {},
                    this.state.product,
                    {
                        [productProperty]: (event.target['type'] === 'number' ? parseFloat(event.target['value']) :  event.target['value'])
                    }
                )
            });
    }

    render() {
        const {saveProduct} = this.props,
            {product} = this.state;

        return (
            <div className="product-admin">
                <Header
                    leftButton={<Link to="/shelf-admin"><span className="icon-back"/></Link>}
                    rightButton={<Link to="/shelf-admin"><span className="icon-save" onClick={() => saveProduct(product)}/></Link>}
                >
                    Admin
                </Header>
                <div className="entry">
                    <label>Name</label>
                    <input
                        type="text"
                        value={product.name}
                        onChange={(event) => this.changeProduct('name', event)}
                    />
                </div>
                <div className="entry">
                    <label>Category</label>
                    <input
                        type="text"
                        value={product.category}
                        onChange={(event) => this.changeProduct('category', event)}
                    />
                </div>
                <div className="entry">
                    <label>Color</label>
                    <input
                        type="text"
                        value={product.color}
                        onChange={(event) => this.changeProduct('color', event)}
                    />
                </div>
                <div className="entry">
                    <label>Price</label>
                    <input
                        type="number"
                        value={product.price}
                        onChange={(event) => this.changeProduct('price', event)}
                    />
                </div>
            </div>
        );
    };
};