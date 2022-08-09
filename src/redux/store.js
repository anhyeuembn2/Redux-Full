import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import root from './Reducers/rootReducer';
const compose=composeWithDevTools();
export const store=createStore(root,compose)