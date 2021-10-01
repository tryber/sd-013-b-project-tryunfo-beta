import React from 'react';

import { Form, Card } from './components';

const MAX_ATTRIBUTE_VALUE = 90;
const MAX_ATTRIBUTE_SUM = 210;
const NUMBER_OF_VALIDATIONS = 7;

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
  validInputs: {},
  cardList: [],
};

class App extends React.Component {
  validationTypes = {
    cardName: 'default',
    cardDescription: 'default',
    cardAttr1: 'attribute',
    cardAttr2: 'attribute',
    cardAttr3: 'attribute',
    cardImage: 'default',
  };

  validateInputs = {
    default: (name, value) => {
      this.setState(
        ({ validInputs }) => ({
          validInputs: {
            ...validInputs,
            [name]: !!value.length,
          },
        }),
        () => this.checkValidInputs(),
      );
    },
    attribute: (name, value) => {
      const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
      const sum = +cardAttr1 + +cardAttr2 + +cardAttr3;

      const validAttribute = value >= 0 && value <= MAX_ATTRIBUTE_VALUE;
      const validSum = sum <= MAX_ATTRIBUTE_SUM;

      this.setState(
        ({ validInputs }) => ({
          validInputs: {
            ...validInputs,
            [name]: validAttribute,
            sum: validSum,
          },
        }),
        () => this.checkValidInputs(),
      );
    },
  };

  constructor() {
    super();

    this.state = INITIAL_STATE;

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.checkValidInputs = this.checkValidInputs.bind(this);
  }

  onInputChange({ target }) {
    const { name, type, checked, value } = target;

    const validationType = this.validationTypes[name];
    const newValue = type === 'checkbox' ? checked : value;

    this.setState(
      { [name]: newValue },
      () => validationType && this.validateInputs[validationType](name, value),
    );
  }

  onSaveButtonClick() {
    const {
      validInputs,
      isSaveButtonDisabled,
      hasTrunfo,
      cardList,
      ...cardProps
    } = this.state;

    this.setState({
      ...INITIAL_STATE,
      cardList: [...cardList, cardProps],
      hasTrunfo: cardProps.cardTrunfo,
    });
  }

  checkValidInputs() {
    const { validInputs } = this.state;
    const validValues = Object.values(validInputs);

    const areValid = validValues.length === NUMBER_OF_VALIDATIONS
      && validValues.every((value) => value);

    this.setState({
      isSaveButtonDisabled: !areValid,
    });
  }

  render() {
    const { validInputs, cardList, ...cardProps } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...cardProps }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...cardProps } />
      </div>
    );
  }
}

export default App;
