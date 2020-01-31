/*
// Item Selectors
*/

// this is used to access list state
const getListState = state => {
	return state.list;
}
// this is used to get the item state
const getItemState = state => {
	return state.item;
}

// a selector to get the text of a list item
export const itemTextSelector = (state, itemId) => {
	const item = getItemState(state);
	return item ? item.idMap[itemId] : '';
}

// get the list of ids stored in state
export const idsSelector = state => {
	const list = getListState(state)
	return list.ids;
}
