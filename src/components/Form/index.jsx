import React, { Component } from 'react';
import Input from '../Input';
import Select from '../Select';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rare: '',
      trunfo: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      name, description, attr1, attr2, attr3, image, rare, trunfo,
    } = this.state;
    return (
      <form>
        <Input
          dataTestid="name-input"
          text="Nome"
          type="text"
          value={ name }
          onChange={ this.handleChange }
          name="name"
        />
        <label htmlFor="description-input">
          Descrição:
          <textarea
            value={ description }
            data-testid="description-input"
            onChange={ this.handleChange }
            name="description"
          />
        </label>
        <Input
          dataTestid="attr1-input"
          text="attr1"
          type="number"
          value={ attr1 }
          onChange={ this.handleChange }
          name="attr1"
        />
        <Input
          dataTestid="attr2-input"
          text="attr2"
          type="number"
          value={ attr2 }
          onChange={ this.handleChange }
          name="attr2"
        />
        <Input
          dataTestid="attr3-input"
          text="attr3"
          type="number"
          value={ attr3 }
          onChange={ this.handleChange }
          name="attr3"
        />
        <Input
          dataTestid="image-input"
          text="Imagem"
          type="text"
          value={ image }
          onChange={ this.handleChange }
          name="image"
        />
        <Select
          dataTestid="rare-input"
          text="Raridade"
          value={ rare }
          name="rare"
          onChange={ this.handleChange }
          options={ ['normal', 'raro', 'muito raro'] }
        />
        <label htmlFor="trunfo">
          Super Trunfo
          <input
            id="trunfo"
            data-testid="trunfo-input"
            name="trunfo"
            type="checkbox"
            checked={ trunfo }
            onChange={ this.handleChange }
          />
        </label>
        <button type="button" data-testid="save-button">
          Salvar
        </button>
      </form>
    );
  }
}
