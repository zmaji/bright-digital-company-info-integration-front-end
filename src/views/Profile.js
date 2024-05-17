import React, { useState, useEffect } from 'react';
import DefaultLayout from '../components/Layout/DefaultLayout';
import BreadCrumb from '../components/Elements/BreadCrumb';
import Table from '../components/Content/Table';
import { useSelector } from 'react-redux';
import profileIcon from '../icons/profile.svg';
import userService from '../services/userService';
import { setUserData } from '../store/userSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import Modal from '../components/Elements/Modal';

const Profile = () => {
  const userData = useSelector(state => state.user.userData.data);
  const authToken = useSelector(state => state.auth.authToken);
  const dispatch = useDispatch();

  const [profileData, setProfileData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editContext, setEditContext] = useState(null);

  const obscurePassword = (password) => {
    return '*'.repeat(password.length);
  };

  const firstName = userData?.firstName ? userData.firstName : '';
  const lastName = userData?.lastName ? userData.lastName : '';
  const emailAddress = userData?.emailAddress ? userData.emailAddress : '';
  const domain = userData?.domain ? userData.domain : '';
  const companyInfoUserName = userData?.companyInfoUserName ? userData.companyInfoUserName : '';
  const companyInfoPassword = userData?.companyInfoPassword ? obscurePassword(userData.companyInfoPassword) : '';

  const openModal = (title, editableValue) => {
    const valueToEdit = title.toLowerCase().includes('password') ? obscurePassword(editableValue) : editableValue;
    setEditContext({ title, editableValue: valueToEdit });
    setIsModalOpen(true);
  };

  const handleModalConfirm = () => {
    if (editContext) { 
      const { title, editableValue } = editContext;
      updateUser(title, editableValue); 
    }
    setIsModalOpen(false);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };
  
  const updateUser = async (title, editableValue) => {
    const titleToFieldMap = {
      'First name': 'firstName',
      'Last name': 'lastName',
      'Email address': 'emailAddress',
      'Domain': 'domain',
      'Password': 'password',
      'Company info username': 'companyInfoUserName',
      'Company info password': 'companyInfoPassword'
    };
  
    const fieldName = titleToFieldMap[title];
    const valueToUpdate = title.toLowerCase().includes('password') ? editableValue : editableValue;
  
    try {
      const updateFields = {
        [fieldName]: valueToUpdate
      };
  
      await userService.updateUser(authToken, updateFields);
      const updatedUser = await userService.getUser(authToken);
  
      if (updatedUser) {
        dispatch(setUserData(updatedUser));
        toast.success(`Successfully updated ${title.toLowerCase()}!`);
        if (title.toLowerCase().includes('password')) {
          setEditContext({ ...editContext, editableValue: obscurePassword(editableValue) });
        }
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred, please contact an admin');
    }
  };

  useEffect(() => {
      const updatedProfileData = [
        { title: 'First name', value: firstName, button: { title: 'Change', style: 'edit', onClick: openModal } },
        { title: 'Last name', value: lastName, button: { title: 'Change', style: 'edit', onClick: openModal } },
        { title: 'Email address', value: emailAddress, button: { title: 'Change', style: 'edit', onClick: openModal } },
        { title: 'Domain', value: domain, button: { title: 'Change', style: 'edit', onClick: openModal } },
        { title: 'Company info username', value: companyInfoUserName, button: { title: 'Change', style: 'edit', onClick: openModal } },
        { title: 'Company info password', value: companyInfoPassword, button: { title: 'Change', style: 'edit', onClick: openModal } },
      ];
      setProfileData(updatedProfileData);
  }, [userData]);

    return (
        <div className='v-profile'>
            <DefaultLayout>
                <div className="v-profile__content-wrapper">
                  <div className="v-profile__content-container u-flex u-flex-v-center">

                    <img className='v-profile__profile-icon' src={profileIcon} alt='Profile icon' />

                    <div className="v-profile__personal-information">
                      <div className="v-profile__breadcrumb-container">
                        <BreadCrumb />
                      </div>

                      <h2 className='v-profile__personal-information__name'>
                        { firstName } { lastName }
                      </h2>

                      <span className='v-profile__personal-information__email'>
                        { emailAddress }
                      </span>
                    </div>

                  </div>

                  <div className="v-profile__content-container__inner">
                      <h1 className='v-profile__content-container__inner__title'>
                          Account
                      </h1>

                      <p className='v-profile__content-container__inner__text'>
                      This is where you manage your personal information. To fully utilize the app's features, please enter your Company.info credentials.
                      </p>

                      <Table data={profileData} />
                  </div>
              </div>

              <Modal
                isOpen={isModalOpen}
                onRequestClose={handleModalCancel}
                title='Are you sure?'
                content={`You're about to change ${editContext?.title || 'this field'}`}
                onConfirm={handleModalConfirm}
                onCancel={handleModalCancel}
              />
            </DefaultLayout>
        </div>
    );
  };
export default Profile;