import * as React from 'react';
import {Product} from '../../models/product';

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
                name: props.product.name,
                price: props.product.price,
                id: props.product.id
            }
        };
    }

    changeProductName(event: React.SyntheticEvent<HTMLInputElement>) {
        this.setState(
            {
                product: Object.assign(
                    {},
                    this.state.product,
                    {
                        name: event.target['value']
                    }
                )
            });
    }

    changeProductPrice(event: React.SyntheticEvent<HTMLInputElement>) {
        this.setState(
            {
                product: Object.assign(
                    {},
                    this.state.product,
                    {
                        price: event.target['value']
                    }
                )
            });
    }

    render() {
        const {saveProduct} = this.props,
            {product} = this.state;

        return (
            <div>
                Name:
                <input
                    type="text"
                    value={product.name}
                    onChange={(event) => this.changeProductName(event)}
                /> <br />
                Price:
                <input
                    type="text"
                    value={product.price}
                    onChange={(event) => this.changeProductPrice(event)}
                /> <br />
                <button onClick={() => saveProduct(product)}>save</button>
            </div>
        );
    };
};