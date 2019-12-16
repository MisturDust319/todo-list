import React from 'react';
import { PropTypes } from 'prop-types';
import logo from './logo.svg';
import './App.css';

const Item = props => {
  return <li><input type="checkbox" /><input type="text" value={props.text}></input><span className="checkmark"></span></li>
}

Item.propTypes = {
  text: PropTypes.string,
};

Item.defaultProps = {
  text: ''
}

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

function App() {
  return (
    <div className="App">
      <label class="container">
        asdf
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>
    </div>
  );
}

export default App;
