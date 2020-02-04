import React from 'react';
import { PropTypes } from 'prop-types';
// import React-Redux components
import { connect } from 'react-redux';

// selectors
import { idsSelector } from './selectors';
// action dispatchers
import { addItem } from './actions';
// import App items
import Item from './Item';

const List = props => {
  // if there are items in the todo list,
  // render it
  if( props.ids.length !== 0 ) {
    return props.ids.map(itemId => {
      return <Item key={itemId} id={itemId} />;
    });
  } 
  // otherwise, ask to create a new list
  else {

    return (<button onClick={props.addItem}>Create List</button>);
  }
}

List.propTypes = {
  ids: PropTypes.array.isRequired
}

List.defaultProps = {
  ids: []
}

const mapStateToProps = state => {
  // get the list of items from the store state
  const ids = idsSelector(state);
  
  return {
    ids
  };
}

export default connect(mapStateToProps, { addItem })(List);

