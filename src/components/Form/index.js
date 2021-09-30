import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

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
        <h2>Adicionar nova carta</h2>
        <Input
          id="name-input"
          type="text"
          text="Nome: "
          value={ cardName }
          onChange={ onInputChange }
        />
        <label htmlFor="description-input">
          Descrição:
          { ' ' }
          <textarea
            id="description-input"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <Input
          type="number"
          id="attr1-input"
          text="Primeiro atributo: "
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <Input
          type="number"
          id="attr2-input"
          text="Segundo atributo: "
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <Input
          type="number"
          id="attr3-input"
          text="Terceiro atributo: "
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <Input
          type="text"
          id="image-input"
          text="Imagem: "
          value={ cardImage }
          onChange={ onInputChange }
        />
        <label htmlFor="rare-input">
          Raridade:
          { ' ' }
          <select
            name="rare-input"
            id="rare-input"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <Input
          id="trunfo-input"
          text="Super Trunfo"
          type="checkbox"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        <button
          type="submit"
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
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
