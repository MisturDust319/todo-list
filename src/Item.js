import React from 'react';
import { PropTypes } from 'prop-types';
// import React-Redux components
import { connect } from 'react-redux';
// import App items
import { editItem } from './actions';
import { itemTextSelector } from './selectors'

const Item = props => {
  return (<li key={props.id} className="item">
    <input type="checkbox" />
    <input type="text" value={props.text}
    onChange={e => props.editItem(props.id, e.target.value)}/>
    <span className="checkmark"></span>
  </li>);
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string,
};

Item.defaultProps = {
  text: ''
}

const mapStateToProps = (state, ownProps)  => {
  // ownProps allows you to grab data from the component props  
  // here, it's used to grab the Item's id
  const text = itemTextSelector(state, ownProps.id);
  return {
    text
  };
}

export default connect(mapStateToProps, { editItem } )(Item);  