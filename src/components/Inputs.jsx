import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Form.css';

class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateForm: props.props,
    };
  }

  onSaveButtonClick() {
    console.log('sbadbas');
  }

  render() {
    const { onInputChange, onSaveButtonClick } = this.props;
    const { stateForm: { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardRare, cardTrunfo, cardImage, isSaveButtonDisabled } } = this.state;
    const rareOptions = ['normal', 'raro', 'muito raro'];
    return (
      <form className="formcard">
        <label htmlFor="inpCarta">
          Nome da carta
          <input
            value={ cardName }
            type="text"
            name="cardName"
            data-testid="name-input"
            onChange={ onInputChange }
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
        <label htmlFor="trunfo-input">
          Trunfo input
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name="cardTrunfo"
            onChange={ onInputChange }
            defaultChecked={ cardTrunfo }
          />
        </label>
        <button
          id="salvar"
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick() }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Inputs.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  props: PropTypes.shape({}).isRequired,
};

export default Inputs;
