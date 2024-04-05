import React, { Component } from 'react';
import './scss/main.scss';
import { Provider } from 'react-redux';
import store from './store/store';
import AppRoutes from './routes/Routes';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store/store';
import { Toaster } from 'react-hot-toast';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRoutes />
        </PersistGate>
        <Toaster />
      </Provider>
    );
  }
}

export default App;
