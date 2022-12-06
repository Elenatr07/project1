import { createStore } from 'redux';
import initReducers from './reducers';

export default function initStore() {
    return createStore(initReducers, {});
}