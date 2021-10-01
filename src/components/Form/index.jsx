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
      <Input inputName="name" type="text" value={ cardName } onChange={ onInputChange } />
      <label htmlFor="description-input">
        Description
        <textarea
          value={ cardDescription }
          onChange={ onInputChange }
          name=""
          data-testid="description-input"
          cols="30"
          rows="10"
        />
      </label>
      <Input
        inputName="attr1"
        type="number"
        value={ cardAttr1 }
        onChange={ onInputChange }
      />
      <Input
        inputName="attr2"
        type="number"
        value={ cardAttr2 }
        onChange={ onInputChange }
      />
      <Input
        inputName="attr3"
        type="number"
        value={ cardAttr3 }
        onChange={ onInputChange }
      />
      <Input
        inputName="image"
        type="text"
        value={ cardImage }
        onChange={ onInputChange }
      />
      <label htmlFor="rare-input">
        Rare
        <select data-testid="rare-input" value={ cardRare } onChange={ onInputChange }>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </label>
      <Input
        inputName="trunfo"
        type="checkbox"
        checked={ cardTrunfo }
        onChange={ onInputChange }
      />
      <button
        type="button"
        data-testid="save-button"
        disabled={ isSaveButtonDisabled }
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
