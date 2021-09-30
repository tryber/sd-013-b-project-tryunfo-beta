import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Checkbox from './Checkbox';
import TextArea from './TextArea';
import Select from './Select';
import Button from './Button';

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderAttributeInputs = this.renderAttributeInputs.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange({ target }) {
    const { type, value, checked, name } = target;

    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  renderAttributeInputs() {
    const { cardAttr1, cardAttr2, cardAttr3, onInputChange } = this.props;

    return (
      <>
        <Input
          id="cardAttr1"
          testId="attr1-input"
          type="number"
          labelText="Attr01"
          onChange={ onInputChange }
          value={ cardAttr1 }
        />
        <Input
          id="cardAttr2"
          testId="attr2-input"
          type="number"
          labelText="Attr02"
          onChange={ onInputChange }
          value={ cardAttr2 }
        />
        <Input
          id="cardAttr3"
          testId="attr3-input"
          type="number"
          labelText="Attr03"
          onChange={ onInputChange }
          value={ cardAttr3 }
        />
      </>
    );
  }

  renderInputs() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardTrunfo,
      onInputChange,
    } = this.props;

    return (
      <>
        <Input
          id="cardName"
          testId="name-input"
          type="text"
          labelText="Nome"
          onChange={ onInputChange }
          value={ cardName }
        />
        <TextArea
          id="cardDescription"
          testId="description-input"
          labelText="Descrição"
          onChange={ onInputChange }
          value={ cardDescription }
        />
        {this.renderAttributeInputs()}
        <Input
          id="cardImage"
          testId="image-input"
          type="text"
          labelText="Imagem"
          onChange={ onInputChange }
          value={ cardImage }
        />
        <Select
          id="cardRare"
          testId="rare-input"
          labelText="Raridade"
          onChange={ onInputChange }
          value={ cardRare }
          options={ ['normal', 'raro', 'muito raro'] }
        />
        <Checkbox
          id="cardTrunfo"
          testId="trunfo-input"
          labelText="Super Trybe Trunfo"
          onChange={ onInputChange }
          isChecked={ cardTrunfo }
        />
      </>
    );
  }

  render() {
    const { isSaveButtonDisabled, onSaveButtonClick } = this.props;

    return (
      <form>
        {this.renderInputs()}
        <Button
          testId="save-button"
          text="Salvar"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        />
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
  hasTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
