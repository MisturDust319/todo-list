/*
// Item Selectors
*/

// this is used to access list state
const getListState = state => {
	return state.list;
}

// a selector to get the text of a list item
export const itemTextSelector = (state, itemId) => {
	const list = getListState(state);
	return list ? list.idMap[itemId] : '';
}

// get the list of ids stored in state
export const idsSelector = state => {
	const list = getListState(state)
	return list.ids;
}
