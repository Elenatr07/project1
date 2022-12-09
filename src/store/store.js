import { createStore } from 'redux';
import initReducers from './reducers';
import middlewares from '../middlewares';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory();

const store = createStore(
    initReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);