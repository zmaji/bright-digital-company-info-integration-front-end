import React from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import BreadCrumb from '../components/elements/BreadCrumb';
import Table from '../components/content/Table';

const testData = [
  { title: 'Name', value: 'John Doe', button: null },
  { title: 'Company info username', value: 30, button: null },
  { title: 'Email', value: 'john@example.com', button: null },
  {
      title: 'Actions',
      value: 'Test',
      button: {
          title: 'Change',
          style: 'tertiary',
          link: '',
      }
  }
];

const Profile = () => {
    return (
        <div className='v-profile'>
            <DefaultLayout>
                <div className="v-profile__content-wrapper">
                  <div className="v-profile__content-container u-flex u-flex-v-center">

                    <div className="v-profile__image"></div>

                    <div className="v-profile__personal-information">
                      <div className="v-profile__breadcrumb-container">
                        <BreadCrumb />
                      </div>

                      <h2 className='v-profile__personal-information__name'>
                        John Doe
                      </h2>

                      <span className='v-profile__personal-information__email'>
                        john.doe@myemail.com
                      </span>
                    </div>

                  </div>

                  <div className="v-profile__content-container__inner">
                      <h1 className='v-profile__content-container__inner__title'>
                          Account
                      </h1>

                      <p className='v-profile__content-container__inner__text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse varius enim in eros.
                      </p>

                      <Table data={testData} />
                  </div>
              </div>
            </DefaultLayout>
        </div>
    );
  };
export default Profile;