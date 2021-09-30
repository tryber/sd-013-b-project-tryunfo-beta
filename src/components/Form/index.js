import React from 'react';
import Input from '../Input';

class Form extends React.Component {
  render() {
    return (
      <form>
        <h2>Adicionar nova carta</h2>
        <Input
          id="name-input"
          type="text"
          text="Nome: "
        />
        <label htmlFor="description-input">
          Descrição:
          { ' ' }
          <textarea id="description-input" data-testid="description-input" />
        </label>
        <Input
          type="number"
          id="attr1-input"
          text="Primeiro atributo: "
        />
        <Input
          type="number"
          id="attr2-input"
          text="Segundo atributo: "
        />
        <Input
          type="number"
          id="attr3-input"
          text="Terceiro atributo: "
        />
        <Input
          type="text"
          id="image-input"
          text="Imagem: "
        />
        <label htmlFor="rare-input">
          Raridade:
          { ' ' }
          <select name="rare-input" id="rare-input" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <Input
          id="trunfo-input"
          text="Super Trunfo"
          type="checkbox"
        />
        <button type="submit" data-testid="save-button">
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
