import PropTypes from 'prop-types';
import React from 'react';

export default class Card extends React.Component {
  render() {
    const
      {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      } = this.props;
    return (
      <div>
        <div data-testid="name-card">
          { cardName }
        </div>
        <div data-testid="description-card">
          { cardDescription }
        </div>
        <div data-testid="attr1-card">
          { cardAttr1 }
        </div>
        <div data-testid="attr2-card">
          { cardAttr2 }
        </div>
        <div data-testid="attr3-card">
          { cardAttr3 }
        </div>
        <div>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        </div>
        <div data-testid="rare-card">
          { cardRare }
        </div>
        <div>
          { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : ''}
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
};
