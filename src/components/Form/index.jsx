import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Select from '../Select';

export default class Form extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     name: '',
  //     description: '',
  //     attr1: '',
  //     attr2: '',
  //     attr3: '',
  //     image: '',
  //     rare: '',
  //     trunfo: '',
  //   };

  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange({ target }) {
  //   const { name } = target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled, onInputChange, onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <Input
          dataTestid="name-input"
          text="Nome"
          type="text"
          value={ cardName }
          onChange={ onInputChange }
          name="name"
        />
        <label htmlFor="description-input">
          Descrição:
          <textarea
            value={ cardDescription }
            data-testid="description-input"
            onChange={ onInputChange }
            name="description"
          />
        </label>
        <Input
          dataTestid="attr1-input"
          text="attr1"
          type="number"
          value={ cardAttr1 }
          onChange={ onInputChange }
          name="attr1"
        />
        <Input
          dataTestid="attr2-input"
          text="attr2"
          type="number"
          value={ cardAttr2 }
          onChange={ onInputChange }
          name="attr2"
        />
        <Input
          dataTestid="attr3-input"
          text="attr3"
          type="number"
          value={ cardAttr3 }
          onChange={ onInputChange }
          name="attr3"
        />
        <Input
          dataTestid="image-input"
          text="Imagem"
          type="text"
          value={ cardImage }
          onChange={ onInputChange }
          name="image"
        />
        <Select
          dataTestid="rare-input"
          text="Raridade"
          value={ cardRare }
          name="rare"
          onChange={ onInputChange }
          options={ ['normal', 'raro', 'muito raro'] }
        />
        <label htmlFor="trunfo">
          Super Trunfo
          <input
            id="trunfo"
            data-testid="trunfo-input"
            name="trunfo"
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="button"
          data-testid="save-button"
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
