import {createStore, combineReducers, Store} from 'redux';
import {rootReducer, AppState} from './reducers';

const configureStore: Store<AppState> = createStore(
    combineReducers<AppState>(rootReducer),
    process.env.NODE_ENV !== 'production' && window.hasOwnProperty('__REDUX_DEVTOOLS_EXTENSION__') &&
    window['__REDUX_DEVTOOLS_EXTENSION__']()
);
export default configureStore;