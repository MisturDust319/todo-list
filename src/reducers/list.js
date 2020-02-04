import { ADD_ITEM } from '../actions';

// the initial state for the Items Reducer
// ids is a list of all ids
// idMap is a JSON object storing the actual items
const initialState = {
	ids: []
}

export default (state = initialState, action) => {
	switch(action.type) {
		// this is used to add an item
		case ADD_ITEM:
			// get the new item's id
			const { id } = action.payload;

			// then add it to the list's item list
			// and the items hash
			return {
				...state,
				ids: [...state.ids, id]
			}

		default:
			return state;
	}
}