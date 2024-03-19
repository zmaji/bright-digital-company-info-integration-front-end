import React from 'react';

const Cards = ({ children }) => {
    return (
      <div className="v-dashboard-overview__cards">
        {children}
      </div>
    );
  };
  
  export default Cards;