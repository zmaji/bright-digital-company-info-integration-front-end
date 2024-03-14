import React, { Component } from 'react';
import './scss/main.scss';
import brightDigitalLogo from './images/logo-bright-zw.svg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div className='c-app-container u-flex'> 
        <div className="c-app-content__container-left u-bg-color--light-blue">
          <div className="c-app-content__container-left-inner">
            <img src={brightDigitalLogo} alt="Bright Digital Logo" />
            <h1>Test</h1>
          </div>
        </div>

        <div className="c-app-content__container-right u-bg-color--light-blue-alt">
        <div className="c-app-content__container-right-inner">
            <h1>Test</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;