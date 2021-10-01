import React from 'react';
import PropTypes from 'prop-types';

function Card({
  cardName,
  cardDescription,
  cardAttr1,
  cardAttr2,
  cardAttr3,
  cardImage,
  cardRare,
  cardTrunfo,
}) {
  return (
    <div>
      <h1 data-testid="name-card">{ cardName }</h1>
      <img data-testid="image-card" src={ cardImage } alt={ cardName } />
      <p data-testid="description-card">
        {cardDescription}
      </p>
      <p data-testid="attr1-card">{cardAttr1}</p>
      <p data-testid="attr2-card">{cardAttr2}</p>
      <p data-testid="attr3-card">{cardAttr3}</p>
      <p data-testid="rare-card">{cardRare}</p>
      {cardTrunfo && <h2 data-testid="trunfo-card">Super Trunfo</h2>}
    </div>
  );
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
