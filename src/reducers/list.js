// the initial state for the Items Reducer
// ids is a list of all ids
// idMap is a JSON object storing the actual items
const initialState = {
	ids: [ '0', '1' ]
}

export default (state = initialState, action) => {
	switch(action.type) {
		default:
			return state;
	}
}