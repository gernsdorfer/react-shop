import * as React from 'react';
import {connect} from 'react-redux';
import {Product} from '../models/product';
import {AppState} from '../reducers/index';
import {Dispatch} from 'redux';
import ShelfAdmin from '../ui/shelf-admin';
import Shop from '../ui/shop/shop';
import {removeProduct, createProduct} from '../actions/shelf.action';

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
            <Shop>
                <ShelfAdmin
                    products={shelfProducts}
                    removeFromShelf={(productId) => removeProduct(productId)}
                    addToShelf={() => addProduct({name: 'New Product', category: 'Lipstick', color: '#333', price: 19.99, id: new Date().getUTCMilliseconds()})}
                />
            </Shop>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShelfAdminContainer);
