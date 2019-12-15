import React from 'react';
import { PropTypes } from 'prop-types';
import logo from './logo.svg';
import './App.css';

const Item = props => {
  return <li><input type="checkbox" /><input type="text" value={props.text}></input></li>
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
      items: ["item1", "item2"]
    }
  }

  render() {
    let items = this.state.items.map(value => {
      return <Item text={value} />;
    });
    return (<ul>{items}</ul>);
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List />
      </header>
    </div>
  );
}

export default App;
