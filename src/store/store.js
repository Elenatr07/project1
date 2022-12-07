import { legacy_createStore as createStore } from 'redux';
import initReducers from './reducers';

export default function initStore() {
    return createStore(initReducers, {});
}