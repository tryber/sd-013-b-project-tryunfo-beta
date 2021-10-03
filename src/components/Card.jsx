import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);
    this.renderDeleteButton = this.renderDeleteButton.bind(this);
  }

  renderDeleteButton() {
    const { deleteCard, index } = this.props;
    return (
      <button
        data-testid="delete-button"
        type="button"
        onClick={ () => deleteCard(index) }
      >
        Excluir
      </button>
    );
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, isBtnDelete } = this.props;

    return (
      <div className="card-body">
        <div className="card-main">
          <h1 data-testid="name-card">{cardName}</h1>
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />
          <p data-testid="description-card">{ cardDescription }</p>
          <h3>
            { 'Atributo 1: ' }
            <span data-testid="attr1-card">{ cardAttr1 }</span>
          </h3>
          <h3>
            { 'Atributo 2: ' }
            <span data-testid="attr2-card">{ cardAttr2 }</span>
          </h3>
          <h3>
            { 'Atributo 3: ' }
            <span data-testid="attr3-card">{ cardAttr3 }</span>
          </h3>
          <h3 data-testid="rare-card">{ cardRare }</h3>
          { cardTrunfo && <h2 data-testid="trunfo-card">Super Trunfo</h2> }
          { isBtnDelete && this.renderDeleteButton() }
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  isBtnDelete: false,
  deleteCard: () => {},
  index: 0,
};

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isBtnDelete: PropTypes.bool,
  deleteCard: PropTypes.func,
  index: PropTypes.number,
};

export default Card;
