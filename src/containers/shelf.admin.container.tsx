import * as React from 'react';
import {connect} from 'react-redux';
import {Product} from '../models/product';
import {AppState} from '../reducers/index';
import {Dispatch} from 'redux';
import {Link} from 'react-router';
import ShelfAdmin from '../ui/shelf-admin';
import {removeProduct} from '../actions/shelf.action';
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

}
const mapDispatchToProps = (dispatch: Dispatch<AppState>): ConnectedDispatch => {
    return {
        removeProduct: (productId: number) => dispatch(removeProduct(productId))
    };
};

class ShelfAdminContainer extends React.PureComponent<ConnectedState & ConnectedDispatch & OwnProps, {}> {
    render() {
        const {shelfProducts}  = this.props;

        return (
            <div>
                <Link to='/shelf-admin' activeClassName='active'>Market</Link>
                <ShelfAdmin
                    products={shelfProducts}
                    removeFromShelf={(productId) => removeProduct(productId) }
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShelfAdminContainer);
