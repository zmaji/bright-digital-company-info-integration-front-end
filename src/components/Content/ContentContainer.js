import React from 'react';

const ContentContainer = ({ children }) => {
    return (
      <div className="c-default-layout__content-wrapper">
        <div className="c-default-layout__content-container">
          {children}
        </div>
      </div>
    );
  };
  
  export default ContentContainer;