import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <div>
          <label htmlFor="name">
            Nome da carta
            <input
              type="text"
              data-testid="name-input"
              name="name"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="description">
            Descrição da carta
            <textarea
              data-testid="description-input"
              name="description"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="first-attribute">
            Atributo 1
            <input
              type="number"
              data-testid="attr1-input"
              name="first-attribute"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="second-attribute">
            Atributo 2
            <input
              type="number"
              data-testid="attr2-input"
              name="second-attribute"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="third-attribute">
            Atributo 3
            <input
              type="number"
              data-testid="attr3-input"
              name="third-attribute"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="image">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              name="image"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="rare-input">
            Raridade
            <select
              data-testid="rare-input"
              name="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="super-trunfo">
            Super Trunfo
            <input
              type="checkbox"
              data-testid="trunfo-input"
              name="super-trunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
        </div>

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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
