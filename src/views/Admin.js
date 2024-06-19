import React from 'react';
import AdminLayout from '../components/Layout/AdminLayout';
import adminCardsData from '../data/AdminCards';
import Cards from '../components/Content/Cards';
import { useSelector } from 'react-redux';

const Profile = () => {
    const userData = useSelector(state => state.user.userData.data);

    return (
        <div className='v-admin'>
            <AdminLayout>
                <div className="v-admin__content-wrapper">
                  <div className="v-admin__content-container__inner">
                      <h1 className='v-admin__content-container__inner__title'>
                      Welcome {userData.firstName} {userData.lastName}
                      </h1>

                      <p className='v-admin__content-container__inner__text'>
                      This admin panel gives you the functionality to manage users
                      </p>
        
                      <Cards cardData={adminCardsData} customStyles={['c-cards--flex', 'c-cards--default-margin']} />
                  </div>
              </div>
            </AdminLayout>
        </div>
    );
  };
  
export default Profile;