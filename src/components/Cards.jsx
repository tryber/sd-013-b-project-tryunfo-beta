import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

class Cards extends Component {
  render() {
    const { cards, deleteCard } = this.props;
    return (
      <div>
        { cards.length !== 0
          && cards.map((card, index) => (
            <div key={ card.cardName }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
                isBtnDelete
                deleteCard={ deleteCard }
                index={ index }
              />
            </div>
          ))}
      </div>
    );
  }
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      cardName: PropTypes.string.isRequired,
      cardDescription: PropTypes.string.isRequired,
      cardAttr1: PropTypes.string.isRequired,
      cardAttr2: PropTypes.string.isRequired,
      cardAttr3: PropTypes.string.isRequired,
      cardImage: PropTypes.string.isRequired,
      cardRare: PropTypes.string.isRequired,
      cardTrunfo: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Cards;
