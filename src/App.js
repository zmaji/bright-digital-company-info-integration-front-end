import React, { Component } from 'react';
import logo from './logo.svg';
import './scss/main.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }

  }

  render() {
    const { } = this.state;

    return (
      <div className="App">
      <header className="App-header u-bg-color--light-gray">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
  }
}

export default App;