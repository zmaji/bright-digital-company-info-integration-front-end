import React from 'react';

const Steps = ({ steps }) => {
    return (
        <div className='c-steps'>
            <div className='c-steps__container'>
                {steps.map((step, index) => (
                    <div key={index} className='c-steps__row u-flex'>
                        <div className='c-steps__circle u-flex'>
                            <div className='c-steps__number'>
                                {index + 1}
                            </div>
                        </div>

                        <div className='c-steps__title'>
                            {step.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Steps;
