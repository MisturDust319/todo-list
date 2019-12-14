import React from 'react';
import logo from './logo.svg';
import './App.css';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<h1>Hello, World</h1>);
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
