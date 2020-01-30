import { EDIT_ITEM } from '../Actions';

// the initial state for the Items Reducer
// is empty
// a
const initialState = {};

export default (state = initialState, action) => {
	switch (action.type) {
		// if you want to edit an item
		case EDIT_ITEM:
			// get the item id
			// and the new text value
			const { id, text } = action.payload;
			
			// return a copy of the state with id's text value set to text
			return {
				...state,
				idMap: {
					...state.idMap,
					[id]: text
				}
			}

		default:
			return state;
	}
}