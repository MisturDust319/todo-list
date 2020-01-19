import React from 'react';
import { PropTypes } from 'prop-types';
// import React-Redux components
import { connect } from 'react-redux';
// import App items
import { editItem } from './Actions';
import { itemTextSelector } from './Selectors'

const Item = props => {
  return (<li key={props.id}>
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

const mapStateToProps = state => {
  const text = itemTextSelector(state, "1");
  return {
    text
  };  
}

export default connect(mapStateToProps, { editItem } )(Item);

/*
class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ["item", "item"]
    }
  }

  render() {
    let items = this.state.items.map((value, index) => {
      return <Item text={value+index} />;
    });
    return (<ul>{items}</ul>);
  }
}
*/