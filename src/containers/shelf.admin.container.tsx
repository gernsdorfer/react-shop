import * as React from 'react';
import {connect} from 'react-redux';
import {Product, newProduct} from '../models/product';
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
                    addToShelf={() => addProduct(newProduct)}
                />
            </Shop>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShelfAdminContainer);
