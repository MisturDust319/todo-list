import React from 'react';
import { PropTypes } from 'prop-types';
// import React-Redux components
import { connect } from 'react-redux';

// selectors
import { idsSelector } from './Selectors';

// import App items
import Item from './Item';

const List = props => {
  /*
  if( props.items ) {
    let items = this.props.items.map(id => {
      return <Item id={id} />;
    });

    return (<ul>{items}</ul>);
  } else {
    return (<p>your list is empty</p>);
  }
  */
  // return (<h1>What?</h1>);
  let items = props.ids.map(itemId => {
      return <Item key={itemId} id={itemId} />;
    });

  return (<ul>{items}</ul>);
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

