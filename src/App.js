import React, { Component } from 'react';
import './scss/main.scss';
import AppRoutes from './routes/Routes'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  };

  render() {
    return (
      <AppRoutes />
    );
  }
}

export default App;