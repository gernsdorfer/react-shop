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

    changeProduct(productProperty: 'price' | 'name', event: React.SyntheticEvent<HTMLInputElement>) {
        this.setState(
            {
                product: Object.assign(
                    {},
                    this.state.product,
                    {
                        [productProperty]: event.target['value']
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
                    onChange={(event) => this.changeProduct('name',event)}
                /> <br />
                Price:
                <input
                    type="text"
                    value={product.price}
                    onChange={(event) => this.changeProduct('price',event)}
                /> <br />
                <button onClick={() => saveProduct(product)}>save</button>
            </div>
        );
    };
};