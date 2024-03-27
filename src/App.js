import React, { Component } from 'react';
import './scss/main.scss';
import { Provider } from 'react-redux';
import store from './store/store';
import AppRoutes from './routes/Routes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  };

  render() {
    return (
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    );
  }
}

export default App;
