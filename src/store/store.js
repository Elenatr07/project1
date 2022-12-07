import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import initReducers from './reducers';
import middelewares from '../middelewares';


export default function initStore() {
    return createStore(initReducers, {}, compose(
        applyMiddleware(...middelewares)
    ));
}
//export default function initStore() {
    //return createStore(initReducers, {}, compose(
     //   applyMiddleware(...middelewares),
     //   window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => { }
    //));
//}

