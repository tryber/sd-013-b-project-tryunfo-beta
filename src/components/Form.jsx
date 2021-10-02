import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="name">
            Nome da carta
            <input type="text" data-testid="name-input" name="name" />
          </label>
        </div>

        <div>
          <label htmlFor="description">
            Descrição da carta
            <textarea data-testid="description-input" name="description" />
          </label>
        </div>

        <div>
          <label htmlFor="first-attribute">
            Atributo 1
            <input type="number" data-testid="attr1-input" name="first-attribute" />
          </label>

          <label htmlFor="second-attribute">
            Atributo 2
            <input type="number" data-testid="attr2-input" name="second-attribute" />
          </label>

          <label htmlFor="third-attribute">
            Atributo 3
            <input type="number" data-testid="attr3-input" name="third-attribute" />
          </label>
        </div>

        <div>
          <label htmlFor="image">
            Imagem
            <input type="text" data-testid="image-input" name="image" />
          </label>
        </div>

        <div>
          <label htmlFor="rare-input">
            Raridade
            <select data-testid="rare-input" name="rare-input">
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="super-trunfo">
            Super Trunfo
            <input type="checkbox" data-testid="trunfo-input" name="super-trunfo" />
          </label>
        </div>

        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
