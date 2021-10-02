import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <h1>Adicionar nova carta</h1>
        <label htmlFor="name">
          Nome
          <input type="text" name="name" id="name" data-testid="name-input" />
        </label>

        <label htmlFor="description">
          Descrição
          <input
            type="textarea"
            name="description"
            id="description"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="attr1">
          Attr1
          <input type="number" name="attr1" id="attr1" data-testid="attr1-input" />
        </label>

        <label htmlFor="attr2">
          Attr2
          <input type="number" name="attr2" id="attr2" data-testid="attr2-input" />
        </label>

        <label htmlFor="attr3">
          Attr3
          <input type="number" name="attr3" id="attr3" data-testid="attr3-input" />
        </label>

        <label htmlFor="image">
          Imagem
          <input type="text" name="image" id="image" data-testid="image-input" />
        </label>

        <label htmlFor="rare">
          Raridade
          <select name="rare" id="rare" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          Super Trunfo
          <input type="checkbox" name="trunfo" id="trunfo" data-testid="trunfo-input" />
        </label>

        <button type="button" data-testid="save-button">Save</button>

      </div>
    );
  }
}

export default Form;
