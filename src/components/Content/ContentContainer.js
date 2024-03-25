import React from 'react';

const ContentContainer = ({ padding, children }) => {
    return (
      <div className="c-default-layout__content-wrapper">
        <div className={`c-default-layout__content-container c-default-layout__content-container__padding--${padding}`}>
            {children}
          </div>
        </div>
    );
  };
  
  export default ContentContainer;