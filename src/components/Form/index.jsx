import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';

import './styles.css';

function Form({
  cardName,
  cardDescription,
  cardAttr1,
  cardAttr2,
  cardAttr3,
  cardImage,
  cardRare,
  cardTrunfo,
  hasTrunfo,
  isSaveButtonDisabled,
  onInputChange,
  onSaveButtonClick,
}) {
  return (
    <form>
      <Input
        className="text-input"
        inputName="name"
        type="text"
        value={ cardName }
        onChange={ onInputChange }
      />
      <label htmlFor="description-input">
        Description
        <textarea
          className="text-input"
          name="description"
          value={ cardDescription }
          onChange={ onInputChange }
          data-testid="description-input"
          cols="30"
          rows="10"
        />
      </label>
      <Input
        className="number-input"
        inputName="attr1"
        type="number"
        value={ cardAttr1 }
        onChange={ onInputChange }
      />
      <Input
        className="number-input"
        inputName="attr2"
        type="number"
        value={ cardAttr2 }
        onChange={ onInputChange }
      />
      <Input
        className="number-input"
        inputName="attr3"
        type="number"
        value={ cardAttr3 }
        onChange={ onInputChange }
      />
      <Input
        className="text-input"
        name="image"
        inputName="image"
        type="text"
        value={ cardImage }
        onChange={ onInputChange }
      />
      <label htmlFor="rare-input">
        Rare
        <select
          className="select-input"
          data-testid="rare-input"
          name="rare"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </label>
      {hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : <Input
        inputName="trunfo"
        type="checkbox"
        checked={ cardTrunfo }
        onChange={ onInputChange }
      /> }
      <button
        type="button"
        data-testid="save-button"
        disabled={ isSaveButtonDisabled() }
        onClick={ onSaveButtonClick }
      >
        Salvar
      </button>
    </form>
  );
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
