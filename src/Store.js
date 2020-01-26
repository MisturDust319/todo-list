import { createStore } from 'redux';
import ItemReducer from './reducers/ItemReducer';

export default createStore(ItemReducer, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());