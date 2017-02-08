import * as React from 'react';
import {connect} from 'react-redux';
import {Product} from '../models/product';
import {AppState} from '../reducers/index';
import {Dispatch} from 'redux';
import {editProduct} from '../actions/shelf.action';
import ProductAdmin from '../ui/product-admin/product-admin';
import Shop from '../ui/shop/shop';

interface OwnProps {
}

interface ConnectedState {
    shelfProducts: Array<Product>;
    params?: {
        productId: number
    };
}
function mapStateToProps(state: AppState): ConnectedState {
    return {
        shelfProducts: state.shelf.products
    };
}

interface ConnectedDispatch {
    editProduct: (product: Product) => void;

}
const mapDispatchToProps = (dispatch: Dispatch<AppState>): ConnectedDispatch => {
    return {
        editProduct: (product: Product) => dispatch(editProduct(product))
    };
};

class ProductAdminContainer extends React.PureComponent<ConnectedState & ConnectedDispatch & OwnProps, {}> {
    render() {
        const {editProduct, shelfProducts, params = {productId: 0}}  = this.props,
            product: Product = shelfProducts
                .filter((product) => product.id == params.productId)
                .reduce((start, current) => current, {name: '', category: '', color: '', price: 0, id: 0});

        return (
            <Shop>
                <ProductAdmin
                    product={product}
                    saveProduct={(product) => editProduct(product)}
                />
            </Shop>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductAdminContainer);
