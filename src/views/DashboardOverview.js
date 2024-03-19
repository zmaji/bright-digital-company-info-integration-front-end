import React from 'react';
import DefaultLayout from '../components/Layout/DefaultLayout';
import Button from '../components/Elements/Button';

const DashboardOverview = () => {
    return (
        <div className='v-dashboard-overview'>
            <DefaultLayout>
                <div className='v-dashboard-overview__content-container'>
                    <h1 className='v-dashboard-overview__content-title'>
                        Start retrieving Bright data
                    </h1>

                    <p className='v-dashboard-overview__content-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus. 
                    </p>

                    <Button title='Set up properties' style='primary' link='/' icon='Plus' animation='move-right' />
                </div>
            </DefaultLayout>
        </div>
    );
  };
export default DashboardOverview;