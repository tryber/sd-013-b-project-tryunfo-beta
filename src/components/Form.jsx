import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';

class Form extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cardName: '',
  //     cardDescription: '',
  //     cardAttr1: '',
  //     cardAttr2: '',
  //     cardAttr3: '',
  //     cardImage: '',
  //     cardRare: '',
  //     cardTrunfo: false,
  //     hasTrunfo: false,
  //     isSaveButtonDisabled: true,
  //     onInputChange: () => {},
  //   };
  //   this.handelChange = this.handelChange.bind(this);
  // }

  // handelChange(target) {
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const { name } = target;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  render() {
    // const { cardName, cardDescription, cardAttr1, cardAttr2,
    //   cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
    //   isSaveButtonDisabled } = this.state;
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;

    return (
      <div>
        Form
        <form>
          <div className="form-input">
            <Input
              name="cardName"
              type="text"
              text="Nome"
              id="name-input"
              dataTestId="name-input"
              value={ cardName }
              setValue={ onInputChange }
            />
          </div>
          <div className="form-input">
            <TextArea
              name="cardDescription"
              text="Descrição"
              id="description-input"
              dataTestId="description-input"
              value={ cardDescription }
              setValue={ onInputChange }
            />
          </div>
          <div className="form-input">
            <Input
              name="cardAttr1"
              type="number"
              text="Atributo 1"
              id="attr1-input"
              dataTestId="attr1-input"
              value={ cardAttr1 }
              setValue={ onInputChange }
            />
          </div>
          <div className="form-input">
            <Input
              name="cardAttr2"
              type="number"
              text="Atributo 2"
              id="attr2-input"
              dataTestId="attr2-input"
              value={ cardAttr2 }
              setValue={ onInputChange }
            />
          </div>
          <div className="form-input">
            <Input
              name="cardAttr3"
              type="number"
              text="Atributo 3"
              id="attr3-input"
              dataTestId="attr3-input"
              value={ cardAttr3 }
              setValue={ onInputChange }
            />
          </div>
          <div className="form-input">
            <Input
              name="cardImage"
              type="text"
              text="Imagem"
              id="image-input"
              dataTestId="image-input"
              value={ cardImage }
              setValue={ onInputChange }
            />
          </div>
          <div className="form-input">
            <Select
              name="cardRare"
              options={ ['normal', 'raro', 'muito raro'] }
              text="Raridade"
              id="rare-input"
              dataTestId="rare-input"
              value={ cardRare }
              setValue={ onInputChange }
            />
          </div>
          <div className="form-input">
            <Input
              name="cardTrunfo"
              type="checkbox"
              text="Super Trybe Trunfo"
              id="trunfo-input"
              dataTestId="trunfo-input"
              value={ cardTrunfo }
              setValue={ onInputChange }
            />
          </div>
          <div className="form-input">
            <button
              type="button"
              data-testid="save-button"
              disabled={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
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

export default Form;
