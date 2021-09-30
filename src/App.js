import React from 'react';
import { Form, Card } from './components';

const MIN_ATTR = 0;
const MAX_ATTR = 90;
const MAX_POINTS = 210;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: '',
      // hasTrunfo: 'false',
      isSaveButtonDisabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
  }

  onInputChange({ target }) {
    const { name, value, checked } = target;
    this.setState({
      [name]: name === 'cardTrunfo' ? checked : value,
    }, () => this.validateInputs());
  }

  onSaveButtonClick(e) {
    e.preventDefault();
  }

  isEmpty = (input) => !!input;

  range0to90 = (attr) => (Number(attr) >= MIN_ATTR && Number(attr) <= MAX_ATTR);

  maximumPoints = (attr1, attr2, attr3) => (
    Number(attr1) + Number(attr2) + Number(attr3) <= MAX_POINTS
  );

  validateInputs() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const { isEmpty, range0to90, maximumPoints } = this;
    const haveToDisable = (
      isEmpty(cardName)
      && isEmpty(cardDescription)
      && isEmpty(cardImage)
      && isEmpty(cardRare)
      && range0to90(cardAttr1)
      && range0to90(cardAttr2)
      && range0to90(cardAttr3)
      && maximumPoints(cardAttr1, cardAttr2, cardAttr3)
    );
    this.setState({ isSaveButtonDisabled: !haveToDisable });
  }

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
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
