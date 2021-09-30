import React from 'react';

const selectOption = ['normal', 'raro', 'muito raro'];

export default function Form() {
  return (
    <form className="form-initial">
      <label htmlFor="name">
        Nome da Carta:
        <input type="text" name="name" id="name" data-testid="name-input" />
      </label>
      <label htmlFor="descricao">
        Descrição da Carta:
        <input
          type="text"
          name="descricao"
          id="descricao"
          data-testid="description-input"
        />
      </label>
      <label htmlFor="attr1">
        Attr01:
        <input
          type="attr1"
          name="attr1"
          id="descricao"
          data-testid="attr1-input"
        />
      </label>
      <label htmlFor="attr2">
        Attr02:
        <input
          type="number"
          name="attr2"
          id="attr2"
          data-testid="attr2-input"
        />
      </label>
      <label htmlFor="attr3">
        Attr03:
        <input
          type="number"
          name="attr3"
          id="attr3"
          data-testid="attr3-input"
        />
      </label>
      <label htmlFor="image">
        Imagem:
        <input
          type="text"
          name="image"
          id="image"
          data-testid="image-input"
        />
      </label>
      <label htmlFor="image">
        Raridade:
        <select name="raridade" id="raridade" data-testid="rare-input">
          {
            selectOption.map((option) => (
              <option value={ option } key={ option }>{option}</option>
            ))
          }
        </select>
      </label>
      <label htmlFor="trunfo">
        Super Trybe Trunfo:
        <input type="checkbox" name="trunfo" id="trunfo" data-testid="trunfo-input" />
      </label>
      <button type="button" data-testid="save-button">Salvar</button>
    </form>
  );
}
