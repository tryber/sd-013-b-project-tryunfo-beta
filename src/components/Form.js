import React, { Component } from 'react';

import Input from './Input';
import Checkbox from './Checkbox';
import TextArea from './TextArea';
import Select from './Select';
import Button from './Button';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rarity: 'normal',
      isTrump: false,
    };

    this.handleChange = this.handleChange.bind(this);
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
    const { attr1, attr2, attr3 } = this.state;

    return (
      <>
        <Input
          id="attr1"
          testId="attr1-input"
          type="number"
          labelText="Attr01"
          onChange={ this.handleChange }
          value={ attr1 }
        />
        <Input
          id="attr2"
          testId="attr2-input"
          type="number"
          labelText="Attr02"
          onChange={ this.handleChange }
          value={ attr2 }
        />
        <Input
          id="attr3"
          testId="attr3-input"
          type="number"
          labelText="Attr03"
          onChange={ this.handleChange }
          value={ attr3 }
        />
      </>
    );
  }

  renderInputs() {
    const { name, description, image, rarity, isTrump } = this.state;

    return (
      <>
        <Input
          id="name"
          testId="name-input"
          type="text"
          labelText="Nome"
          onChange={ this.handleChange }
          value={ name }
        />
        <TextArea
          id="description"
          testId="description-input"
          labelText="Descrição"
          onChange={ this.handleChange }
          value={ description }
        />
        {this.renderAttributeInputs()}
        <Input
          id="image"
          testId="image-input"
          type="text"
          labelText="Imagem"
          onChange={ this.handleChange }
          value={ image }
        />
        <Select
          id="rarity"
          testId="rare-input"
          labelText="Raridade"
          onChange={ this.handleChange }
          value={ rarity }
          options={ ['normal', 'raro', 'muito raro'] }
        />
        <Checkbox
          id="isTrump"
          testId="trunfo-input"
          labelText="Super Trybe Trunfo"
          onChange={ this.handleChange }
          isChecked={ isTrump }
        />
      </>
    );
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        {this.renderInputs()}
        <Button submit testId="save-button" text="Salvar" />
      </form>
    );
  }
}

export default Form;
