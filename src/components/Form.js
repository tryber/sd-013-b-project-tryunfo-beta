import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Checkbox from './Checkbox';

class Form extends Component {
  render() {
    const {
      onInputChange,
      onSaveButtonClick,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.props;

    return (
      <form onSubmit={ onSaveButtonClick }>
        <Input
          type="text"
          name="cardName"
          text="name"
          value={ cardName }
          onChange={ onInputChange }
          dataTestid="name-input"
        />
        <label htmlFor="cardDescription">
          description
          <textarea
            id="cardDescription"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
          />
        </label>
        <Input
          type="number"
          name="cardAttr1"
          text="attr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
          dataTestid="attr1-input"
        />
        <Input
          type="number"
          name="cardAttr2"
          text="attr2"
          value={ cardAttr2 }
          onChange={ onInputChange }
          dataTestid="attr2-input"
        />
        <Input
          type="number"
          name="cardAttr3"
          text="attr3"
          value={ cardAttr3 }
          onChange={ onInputChange }
          dataTestid="attr3-input"
        />
        <Input
          type="text"
          name="cardImage"
          text="image"
          value={ cardImage }
          onChange={ onInputChange }
          dataTestid="image-input"
        />
        <label htmlFor="cardRare">
          Raridade
          <select
            id="cardRare"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <Checkbox
          name="cardTrunfo"
          text="trunfo"
          value={ cardTrunfo }
          onChange={ onInputChange }
          dataTestid="trunfo-input"
        />
        <button type="submit" disabled={ isSaveButtonDisabled } data-testid="save-button">
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
};

export default Form;
