import {createStore, combineReducers, applyMiddleware, Store} from 'redux';
import {rootReducer, AppState} from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore: Store<AppState> = createStore(
    combineReducers<AppState>(rootReducer),
    composeWithDevTools({})(applyMiddleware())
);
export default configureStore;