import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { cardName, cardImage, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardRare, cardTrunfo, cards } = this.props;
    return (
      <div>
        <p data-testid="name-card">{cardName}</p>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{cardDescription}</p>
        <p data-testid="attr1-card">{cardAttr1}</p>
        <p data-testid="attr2-card">{cardAttr2}</p>
        <p data-testid="attr3-card">{cardAttr3}</p>
        <p data-testid="rare-card">{cardRare}</p>
        {cardTrunfo && <p data-testid="trunfo-card">{cardTrunfo && 'Super Trunfo'}</p> }
        <div>
          {cards.length !== 0 && cards.map((element, index) => (
            <div key={ index }>
              <p>{element.cardName}</p>
              <p>{element.cardImage}</p>
              <p>{element.cardDescription}</p>
              <p>{element.cardAttr1}</p>
              <p>{element.cardAttr2}</p>
              <p>{element.cardAttr3}</p>
              <p>{element.cardRare}</p>
              <p>{element.cardTrunfo}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  cards: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }).isRequired,
};

export default Card;
