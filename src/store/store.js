import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import initReducers from './reducers';
import middlewares from '../middlewares';
import { persistStore, persistReducer } from 'redu'


const persistConfig = {
    key: "geekmessanger",
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ["messageReducer"],
};

export const history = createBrowserHistory()

function initStore() {

    const store = createStore(
        persistReducer(persistConfig, initReducers(history)),
        compose(
            applyMiddleware(routerMiddleware(history), ...middlewares),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => { },
        ),
    );

    const persistor = persistStore(store);
    return { store, persistor };
}

export default initStore;

//export default function initStore() {
  //  return createStore(initReducers(history), {}, compose(
    //    applyMiddleware(routerMiddleware(history), ...middlewares)
    //));
//}
//export const history = createBrowserHistory();
//const store = createStore(
//    initReducers,
 //   window.__REDUX_DEVTOOLS_EXTENSION__ &&
 //   window.__REDUX_DEVTOOLS_EXTENSION__()
//);



