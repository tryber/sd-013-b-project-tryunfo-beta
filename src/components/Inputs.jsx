import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Form.css';

class Inputs extends Component {
  render() {
    const { onInputChange, onSaveButtonClick, cardName, cardAttr1,
      cardDescription, cardImage, cardRare, cardAttr2,
      cardAttr3, cardTrunfo, isSaveButtonDisabled, hasTrunfo } = this.props;
    const rareOptions = ['normal', 'raro', 'muito raro'];
    return (
      <form className="formcard">
        <label htmlFor="inpCarta">
          Nome da carta
          <input
            onChange={ onInputChange }
            value={ cardName }
            type="text"
            name="cardName"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="descriptionCard">
          Descrição da carta
          <input
            type="textarea"
            name="cardDescription"
            data-testid="description-input"
            onChange={ onInputChange }
            value={ cardDescription }
          />
        </label>
        <label htmlFor="attr1">
          Atributo 1
          <input
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            onChange={ onInputChange }
            value={ cardAttr1 }
          />
        </label>
        <label htmlFor="attr2">
          Atributo 2
          <input
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            onChange={ onInputChange }
            value={ cardAttr2 }
          />
        </label>
        <label htmlFor="attr3">
          Atributo 3
          <input
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            onChange={ onInputChange }
            value={ cardAttr3 }
          />
        </label>
        <label htmlFor="image-input">
          Imagem input
          <input
            type="text"
            data-testid="image-input"
            name="cardImage"
            onChange={ onInputChange }
            value={ cardImage }
          />
        </label>
        <label htmlFor="rare-input">
          Rare input
          <select
            name="cardRare"
            data-testid="rare-input"
            onChange={ onInputChange }
            value={ cardRare }
          >
            {rareOptions.map((optionRare, i) => <option key={ i }>{optionRare}</option>)}
          </select>
        </label>
        <div>
          trunfo inptu
          {hasTrunfo === false ? <input
            type="checkbox"
            data-testid="trunfo-input"
            name="cardTrunfo"
            onChange={ onInputChange }
            checked={ cardTrunfo }
          /> : <p>Você já tem um Super Trunfo em seu baralho</p>}
        </div>
        <button
          id="salvar"
          type="button"
          disabled={ isSaveButtonDisabled }
          data-testid="save-button"
          onClick={ () => onSaveButtonClick() }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Inputs.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Inputs;
