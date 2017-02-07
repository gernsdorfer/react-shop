import * as React from 'react';
import * as ReactDOM from 'react-dom';
import store from './store';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';

import Market from './containers/market.container';
import ShelfAdmin from './containers/shelf.admin.container';
import ProductAdmin from './containers/product.admin.container';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
                <Route path="/" component={Market}/>
                <Route path="/shelf-admin" component={ShelfAdmin}/>
                <Route path="/product/edit/:productId" component={ProductAdmin}/>
        </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
