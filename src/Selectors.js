// a selector to get the text of a list item
export const itemTextSelector = (state, itemId) => {
	return state.ids ? state.idMap[itemId] : '';
}

// get the list of ids stored in state

export const idsSelector = state => {
	return state.ids;
}
