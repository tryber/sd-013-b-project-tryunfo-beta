import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';

class Form extends Component {
  render() {
    return (
      <div>
        Form
        <form>
          <div className="form-input">
            <Input
              type="text"
              text="Nome"
              id="name-input"
              dataTestId="name-input"
              value={ ' ' }
              onChange={ () => {} }
            />
          </div>
          <div className="form-input">
            <TextArea
              text="Descrição"
              id="description-input"
              dataTestId="description-input"
              value={ ' ' }
              onChange={ () => {} }
            />
          </div>
          <div className="form-input">
            <Input
              type="number"
              text="Atributo 1"
              id="attr1-input"
              dataTestId="attr1-input"
              value={ ' ' }
              onChange={ () => {} }
            />
          </div>
          <div className="form-input">
            <Input
              type="number"
              text="Atributo 2"
              id="attr2-input"
              dataTestId="attr2-input"
              value={ ' ' }
              onChange={ () => {} }
            />
          </div>
          <div className="form-input">
            <Input
              type="number"
              text="Atributo 3"
              id="attr3-input"
              dataTestId="attr3-input"
              value={ ' ' }
              onChange={ () => {} }
            />
          </div>
          <div className="form-input">
            <Input
              type="text"
              text="Imagem"
              id="image-input"
              dataTestId="image-input"
              value={ ' ' }
              onChange={ () => {} }
            />
          </div>
          <div className="form-input">
            <Select
              options={ ['normal', 'raro', 'muito raro'] }
              text="Raridade"
              id="rare-input"
              dataTestId="rare-input"
              value={ ' ' }
              onChange={ () => {} }
            />
          </div>
          <div className="form-input">
            <Input
              type="checkbox"
              text="Super Trybe Trunfo"
              id="trunfo-input"
              dataTestId="trunfo-input"
              value={ ' ' }
              onChange={ () => {} }
            />
          </div>
          <div className="form-input">
            <button
              type="button"
              data-testid="save-button"
              onClick={ () => {} }
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
