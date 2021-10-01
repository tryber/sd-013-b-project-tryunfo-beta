import PropTypes from 'prop-types';
import React, { Component } from 'react';

class CardsDeck extends Component {
  render() {
    const { cards, delCards } = this.props;
    return (
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
            <button
              type="button"
              data-testid="delete-button"
              onClick={ () => delCards(element.id, cards) }
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    );
  }
}

CardsDeck.propTypes = {
  cards: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }).isRequired,
};

export default CardsDeck;
