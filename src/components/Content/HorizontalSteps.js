import React from 'react';

const HorizontalSteps = ({ steps }) => {
    return (
        <div className="c-steps-horizontal">
            <div className="c-steps-horizontal__container u-flex">
                {steps.map((step, index) => (
                    <div key={index} className="c-steps-horizontal__step u-flex u-flex-column">
                        <div className="c-steps-horizontal__title">{step.title}</div>
                        
                        <div className="c-steps-horizontal__circle-wrapper">
                            <div className="c-steps-horizontal__circle u-flex">
                            <img className='c-steps-horizontal__icon' src={step.icon} alt='Step icon' />
                            </div>
                            {index < steps.length - 1 && (
                                <div className="c-steps-horizontal__line"></div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HorizontalSteps;
