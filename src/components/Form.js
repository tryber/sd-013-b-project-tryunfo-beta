import React from 'react';
import Input from './Input';
import Select from './Select';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const options = ['normal', 'raro', 'muito raro'];

    const { name, description } = this.state;
    return (
      <div>
        <Input
          label="Nome:"
          name="name"
          type="text"
          dataid="name-input"
          value={ name }
          onChange={ this.handleChange }
        />
        <label htmlFor="description">
          Descricao
          <textarea
            rows="4"
            cols="40"
            value={ description }
            onChange={ this.handleChange }
            name="description"
            data-testid="description-input"
          />
        </label>
        <Input
          label="Attr1:"
          type="number"
          name="attr1"
          dataid="attr1-input"
        />
        <Input
          label="Attr2:"
          type="number"
          name="attr1"
          dataid="attr2-input"
        />
        <Input
          label="Attr3:"
          type="number"
          name="attr1"
          dataid="attr3-input"
        />
        <Input
          label="Image"
          type="text"
          name="image"
          dataid="image-input"
        />
        <Select
          label="Raridade:"
          name="rare"
          option={ options }
          dataid="rare-input"
        />
        <Input
          label="Trunfo"
          type="checkbox"
          dataid="trunfo-input"
          name="trunfo"
        />
        <button
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </div>
    );
  }
}
