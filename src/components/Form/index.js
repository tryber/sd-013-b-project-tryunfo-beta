import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import TextArea from '../TextArea';
import Select from '../Select';
import Button from '../Button';
import CheckBox from '../Checkbox';

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
          name="cardName"
        />
        <TextArea
          id="description-input"
          text="Descrição: "
          value={ cardDescription }
          name="cardDescription"
          onChange={ onInputChange }
        />
        <Input
          type="number"
          id="attr1-input"
          text="Primeiro atributo: "
          value={ cardAttr1 }
          name="cardAttr1"
          onChange={ onInputChange }
        />
        <Input
          type="number"
          name="cardAttr2"
          id="attr2-input"
          text="Segundo atributo: "
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <Input
          type="number"
          name="cardAttr3"
          id="attr3-input"
          text="Terceiro atributo: "
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <Input
          type="text"
          name="cardImage"
          id="image-input"
          text="Imagem: "
          value={ cardImage }
          onChange={ onInputChange }
        />
        <Select
          id="rare-input"
          name="cardRare"
          text="Raridade: "
          value={ cardRare }
          onChange={ onInputChange }
        />
        <CheckBox
          id="trunfo-input"
          name="cardTrunfo"
          text="Super Trunfo"
          type="checkbox"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        <Button
          id="save-button"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
          text="Salvar"
        />
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
