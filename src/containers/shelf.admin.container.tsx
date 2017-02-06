import * as React from 'react';
import {connect} from 'react-redux';
import {Product} from '../models/product';
import {AppState} from '../reducers/index';
import {Dispatch} from 'redux';
import {Link} from 'react-router';
import ShelfAdmin from '../ui/shelf-admin';
import {removeProduct, createProduct} from '../actions/shelf.action';
import ProductAdmin from '../ui/product-admin/product-admin';

interface OwnProps {
}

interface ConnectedState {
    shelfProducts: Array<Product>;
}
function mapStateToProps(state: AppState): ConnectedState {
    return {
        shelfProducts: state.shelf.products
    };
}

interface ConnectedDispatch {
    removeProduct: (productId: number) => void;
    addProduct: (product: Product) => void;

}
const mapDispatchToProps = (dispatch: Dispatch<AppState>): ConnectedDispatch => {
    return {
        removeProduct: (productId: number) => dispatch(removeProduct(productId)),
        addProduct: (product: Product) => dispatch(createProduct(product))
    };
};

class ShelfAdminContainer extends React.PureComponent<ConnectedState & ConnectedDispatch & OwnProps, {}> {
    render() {
        const {shelfProducts, removeProduct, addProduct}  = this.props;

        return (
            <div>
                <Link to='/' activeClassName='active'>Market</Link>
                <ShelfAdmin
                    products={shelfProducts}
                    removeFromShelf={(productId) => removeProduct(productId) }
                />
                <ProductAdmin
                    product={{name: '',price : 0,id : new Date().getUTCMilliseconds()}}
                    saveProduct={(product) => addProduct(product)}
                    />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShelfAdminContainer);
