import React from 'react';
import Card from './Card';

const Cards = ({ cardData, customStyles }) => {
  const styles = customStyles ? customStyles.join(' ') : '';

  return (
    <div className={`c-cards ${styles}`}>
      {cardData.map((card, index) => (
        <Card
          key={index}
          step={card.step}
          icon={card.icon}
          title={card.title}
          text={card.text}
          button={card.button}
        />
      ))}
    </div>
  );
};

export default Cards;
