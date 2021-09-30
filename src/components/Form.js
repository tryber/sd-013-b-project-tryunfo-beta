import PropTypes from 'prop-types';
import React from 'react';
import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: '',
      // description: '',
      // attr1: 0,
      // attr2: 0,
      // attr3: 0,
      // image: '',
      // rare: '',
      // trunfo: false,
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
    const
      {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
        hasTrunfo,
        isSaveButtonDisabled,
        onInputChange,
        onSaveButtonClick,
      } = this.props;
    // const { name, description,
    //   attr1, attr2, attr3, image, trunfo, rare } = this.state;
    return (
      <div>
        <Input
          label="Nome:"
          name="name"
          type="text"
          dataid="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />
        <TextArea
          onChange={ onInputChange }
          value={ cardDescription }
        />
        <Input
          label="Attr1:"
          type="number"
          onChange={ onInputChange }
          name="attr1"
          value={ cardAttr1 }
          dataid="attr1-input"
        />
        <Input
          label="Attr2:"
          type="number"
          onChange={ onInputChange }
          name="attr2"
          value={ cardAttr2 }
          dataid="attr2-input"
        />
        <Input
          label="Attr3:"
          type="number"
          value={ cardAttr3 }
          onChange={ onInputChange }
          name="attr3"
          dataid="attr3-input"
        />
        <Input
          label="Image"
          value={ cardImage }
          onChange={ onInputChange }
          type="text"
          name="image"
          dataid="image-input"
        />
        <Select
          label="Raridade:"
          name="rare"
          value={ cardRare }
          option={ options }
          dataid="rare-input"
          onChange={ onInputChange }
        />
        <Input
          label="Trunfo"
          checked={ cardTrunfo }
          type="checkbox"
          onChange={ onInputChange }
          dataid="trunfo-input"
          name="trunfo"
        />
        <button
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
