import { EDIT_ITEM } from 'Actions';

// the initial state for the Items Reducer
// ids is a list of all ids
// idMap is a JSON object storing the actual items
const initialStateItems = {
	ids: [],
	idMap: {}
}

const itemsReducer function(state = initialStateItems, action) {
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
					..state.idMap,
					[id]: {
						text
					}
				}
			}

		default:
			return state;
	}
}