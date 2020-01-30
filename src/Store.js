import { createStore } from 'redux';
import AppReducer from './reducers/appReducer';

export default createStore(AppReducer, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());