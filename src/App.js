import React, { Component } from 'react';
import './scss/main.scss';
import brightDigitalLogo from './images/logo-bright-zw.svg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  };

  render() {
    return (
      <div className='c-app-container u-flex'> 
          <div className="c-app-content__container-left u-bg-color--light-blue">
            <div className="c-app-content__container-left-inner">

              <div className='c-app-content__header-container'>
                <img className="c-app-content__bright-logo" src={brightDigitalLogo} alt="Bright Digital Logo" />
              </div>

              <p className='c-app-content__p'>
                The #1 HubSpot integration to improve your sales
              </p>

              <h1 className='c-app-content__h1-small'>
                Company.info + HubSpot
                <span className='c-app-content__span'>Make your data Bright</span>
              </h1>

              <div className="c-app-content__inner-content">
              <p>
                Discover the possiblities of connecting Company.Info with HubSpot and improve your sales process now!
              </p>

              <form>
                <div className="u-m-top">
                  <label>Email address</label>
                </div>
                <input type="email" name="name" />

                <label>Password</label>
                <input type="password" name="name" />

                <div className="c-app-content__form-bar u-flex u-flex-sb">
                  <div className="c-app-content__remember-me u-flex">
                    <input type='checkbox'></input>
                    <p className='c-app-content__p-small'>Remember me</p>
                  </div>
                  <p className='c-app-content__p-small--underline'>Forgot password?</p>
                </div>

                <input type="submit" value="Sign in" />

                {/* <div className="c-app-content__line u-flex u-flex-sb u-flex-v-center">
                  <hr/>
                  <p className='c-app-content__p-grey'>Or</p>
                  <hr/>
                </div> */}

                <div className="c-app-content__no-account u-flex u-flex-center u-flex-v-center">
                  <p className='c-app-content__p-light'>Don't have an account?&nbsp;</p>
                  <p className='c-app-content__p-medium'>Sign up</p>
                </div>
              </form>
              </div>
            </div>
          </div>
        <div className="c-app-content__container-right u-bg-color--light-blue-alt">
        <div className="c-app-content__container-right-inner">
          <div className='c-app-content__header-container c-app-content__header-container--right'>
          <img className="c-app-content__review" src={brightDigitalLogo} alt="Bright Digital Logo" />
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;