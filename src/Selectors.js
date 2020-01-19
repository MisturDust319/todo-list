// a selector to get the text of a list item
export const itemTextSelector = (state, itemId) => {
	return state.ids ? state.idMap[itemId] : '';
}
