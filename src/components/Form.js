import React, { Component } from 'react';
import Input from './Input';

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
      rare: 'normal',
      trunfo: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value, checked } = target;
    this.setState({
      [name]: name === 'trunfo' ? checked : value,
    });
  }

  handleClick(e) {
    e.preventDefault();
  }

  render() {
    const { name, description, attr1, attr2, attr3, image, rare, trunfo } = this.state;
    return (
      <form onSubmit={ this.handleClick }>
        <Input
          type="text"
          name="name"
          value={ name }
          onChange={ this.handleChange }
        />
        <label htmlFor="description">
          description
          <textarea
            id="description"
            name="description"
            value={ description }
            onChange={ this.handleChange }
            data-testid="description-input"
          />
        </label>
        <Input
          type="number"
          name="attr1"
          value={ attr1 }
          onChange={ this.handleChange }
        />
        <Input
          type="number"
          name="attr2"
          value={ attr2 }
          onChange={ this.handleChange }
        />
        <Input
          type="number"
          name="attr3"
          value={ attr3 }
          onChange={ this.handleChange }
        />
        <Input
          type="text"
          name="image"
          value={ image }
          onChange={ this.handleChange }
        />
        <label htmlFor="rare">
          Raridade
          <select
            id="rare"
            name="rare"
            value={ rare }
            onChange={ this.handleChange }
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <Input
          type="checkbox"
          name="trunfo"
          value={ trunfo }
          onChange={ this.handleChange }
        />
        <button type="submit" data-testid="save-button">
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
