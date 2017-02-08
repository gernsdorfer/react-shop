import * as React from 'react';
import {connect} from 'react-redux';
import Shelf from '../ui/shelf/shelf';
import Basket from '../ui/basket/basket';
import Shop from '../ui/shop/shop';
import {Product} from '../models/product';
import {AppState} from '../reducers/index';
import {addProductToBasket, removeProductFromBasket} from '../actions/basket.action';
import {Dispatch} from 'redux';

interface OwnProps {
}

interface ConnectedState {
    basketProducts: Array<Product>;
    shelfProducts: Array<Product>;
}
function mapStateToProps(state: AppState): ConnectedState {
    return {
        basketProducts: state.basket.products,
        shelfProducts: state.shelf.products
    };
}

interface ConnectedDispatch {
    addProductToBasket: (product: Product) => void;
    removeProductFromBasket: (productId: number) => void;
}
const mapDispatchToProps = (dispatch: Dispatch<AppState>): ConnectedDispatch => {
    return {
        addProductToBasket: (product: Product) => dispatch(addProductToBasket(product)),
        removeProductFromBasket: (productIndex: number) => dispatch(removeProductFromBasket(productIndex))
    };
};

class MarketContainer extends React.PureComponent<ConnectedState & ConnectedDispatch & OwnProps, {}> {
    render() {
        const {
            basketProducts,
            shelfProducts,
            addProductToBasket,
            removeProductFromBasket
        }  = this.props;

        return (
            <Shop>
                <Shelf
                    products={shelfProducts}
                    addToBasket={(product) => addProductToBasket(product)}
                />
                <Basket
                    products={basketProducts}
                    removeProduct={(productIndex) => removeProductFromBasket(productIndex)}
                />
            </Shop>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketContainer);
