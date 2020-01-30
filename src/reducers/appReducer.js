// this function is used to generate a master reducer
import { combineReducers } from 'redux';

// import reducers
import item from './item';
import list from './list';

const appReducer = combineReducers({
	item,
	list
});

export default appReducer;