import { createStore } from 'redux';
import ListReducer from './reducers/ListReducer';

export default createStore(ListReducer, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());