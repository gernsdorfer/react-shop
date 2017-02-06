import * as React from 'react';
import {connect} from 'react-redux';
import {Product} from '../models/product';
import {AppState} from '../reducers/index';
import {Dispatch} from 'redux';
import {Link} from 'react-router';
import {editProduct} from '../actions/shelf.action';
import ProductAdmin from '../ui/product-admin/product-admin';

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
                .filter((product) => product.id !== params.productId)
                .reduce((start, current) => current, {id: 0, name: '', price: 0});
        return (
            <div>
                <Link to='/' activeClassName='active'>Market</Link>
                <ProductAdmin
                    product={product}
                    saveProduct={(product) => editProduct(product)}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductAdminContainer);
