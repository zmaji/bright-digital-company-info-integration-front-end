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
        <h1>
          Super leuke tekst
        </h1>
      </header>
    </div>
    )
  }
}

export default App;