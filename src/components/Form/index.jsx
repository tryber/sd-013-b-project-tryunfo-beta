import React from 'react';

const selectOption = ['normal', 'raro', 'muito raro'];

export default function Form(props) {
  const {
    cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare,
    cardTrunfo, hasTrunfo, isSaveButtonDisabled, onInputChange, onSaveButtonClick,
  } = props;
  return (
    <form className="form-initial">
      <label htmlFor="name">
        Nome da Carta:
        <input
          type="text"
          name="name"
          id="name"
          data-testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />
      </label>
      <label htmlFor="descricao">
        Descrição da Carta:
        <input
          type="text"
          name="descricao"
          id="descricao"
          data-testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
        />
      </label>
      <label htmlFor="attr1">
        Attr01:
        <input
          type="number"
          name="attr1"
          id="descricao"
          data-testid="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
      </label>
      <label htmlFor="attr2">
        Attr02:
        <input
          type="number"
          name="attr2"
          id="attr2"
          data-testid="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
      </label>
      <label htmlFor="attr3">
        Attr03:
        <input
          type="number"
          name="attr3"
          id="attr3"
          data-testid="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
      </label>
      <label htmlFor="image">
        Imagem:
        <input
          type="text"
          name="image"
          id="image"
          data-testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />
      </label>
      <label htmlFor="raridade">
        Raridade:
        <select
          name="raridade"
          id="raridade"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          {
            selectOption.map((option) => (
              <option value={ option } key={ option }>{option}</option>
            ))
          }
        </select>
      </label>
      <label htmlFor="trunfo">
        Super Trybe Trunfo:
        <input
          type="checkbox"
          name="trunfo"
          id="trunfo"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>
      <button
        disabled={ isSaveButtonDisabled }
        type="button"
        data-testid="save-button"
        onClick={ onSaveButtonClick }
      >
        Salvar

      </button>
    </form>
  );
}
