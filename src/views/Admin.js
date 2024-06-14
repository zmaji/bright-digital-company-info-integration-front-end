import React from 'react';
import AdminLayout from '../components/Layout/AdminLayout';

const Profile = () => {
    return (
        <div className='v-admin'>
            <AdminLayout>
                <div className="v-admin__content-wrapper">
                  <div className="v-admin__content-container__inner">
                      <h1 className='v-admin__content-container__inner__title'>
                          Admin panel
                      </h1>

                      <p className='v-admin__content-container__inner__text'>
                      Test
                      </p>
                  </div>
              </div>
            </AdminLayout>
        </div>
    );
  };
  
export default Profile;