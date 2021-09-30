import PropTypes from 'prop-types';
import React from 'react';
import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        // hasTrunfo,
        isSaveButtonDisabled,
        onInputChange,
        onSaveButtonClick,
      } = this.props;
    return (
      <div>
        <Input
          label="Nome:"
          name="cardName"
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
          name="cardAttr1"
          value={ cardAttr1 }
          dataid="attr1-input"
        />
        <Input
          label="Attr2:"
          type="number"
          onChange={ onInputChange }
          name="cardAttr2"
          value={ cardAttr2 }
          dataid="attr2-input"
        />
        <Input
          label="Attr3:"
          type="number"
          value={ cardAttr3 }
          onChange={ onInputChange }
          name="cardAttr3"
          dataid="attr3-input"
        />
        <Input
          label="Image"
          value={ cardImage }
          onChange={ onInputChange }
          type="text"
          name="cardImage"
          dataid="image-input"
        />
        <Select
          label="Raridade:"
          name="cardRare"
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
          name="cardTrunfo"
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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
