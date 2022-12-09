import { createStore } from 'redux';
import initReducers from './reducers';

export default function initStore() {
    return createStore(initReducers, {});
}
const store = createStore(
    initReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
