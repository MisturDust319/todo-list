import React from 'react';
import { PropTypes } from 'prop-types';
// import React-Redux components
import { connect } from 'react-redux';

// selectors
import { idsSelector } from './selectors';
// action dispatchers
// import { addItem } from './actions';
// import App items
import Item from './Item';

const List = props => {
  return props.ids.map(itemId => {
    return <Item key={itemId} id={itemId} />;
  });
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

export default connect(mapStateToProps)(List);

