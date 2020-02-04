// define action type constants
// const ADD_TODO = "ADD_TODO";
export const EDIT_ITEM = "EDIT_ITEM";
export const ADD_ITEM = 'ADD_ITEM';

// this provides a unique id to all items and sublists
let itemId = 0;
const getItemId = () => {
	return itemId++;
}

// LIST ITEM

// this creates an action to change the text of a list item
// id is the element to change
// text is the new string data
export const editItem = (id, text) => ({
	type: EDIT_ITEM,
	payload: {
		id,
		text
	}
});

export const addItem = () => ({
	type: ADD_ITEM,
	payload: {
		id : getItemId()
	}
});