import React from 'react';
import Card from './components/Card';
import Cards from './components/Cards';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      isValid: false,
      cards: [],
    };
    this.handelChange = this.handelChange.bind(this);
    this.updateState = this.updateState.bind(this);
    this.validationData = this.validationData.bind(this);
    this.getIsNumberValid = this.getIsNumberValid.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  componentDidUpdate() {
    const valid = this.validationData();
    const { isSaveButtonDisabled, isValid } = this.state;
    if (valid === isSaveButtonDisabled && !isValid) {
      this.updateState('isSaveButtonDisabled', false);
      this.updateState('isValid', true);
    } else if (valid === isSaveButtonDisabled && isValid) {
      this.updateState('isSaveButtonDisabled', true);
      this.updateState('isValid', false);
    }
  }

  getIsNumberValid(number) {
    const value = parseInt(number, 10);
    const MAX_VALUE = 90;
    if (value >= 0 && value <= MAX_VALUE) {
      return true;
    }
    return false;
  }

  validationData() {
    const SUM_MAX = 210;
    const { cardName, cardDescription,
      cardImage, cardRare, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    if (cardName !== '' && cardDescription !== ''
    && cardImage !== '' && cardRare !== ''
    && this.getIsNumberValid(cardAttr1)
    && this.getIsNumberValid(cardAttr2)
    && this.getIsNumberValid(cardAttr3)
    && (parseInt(cardAttr1, 10) + parseInt(cardAttr2, 10)
    + parseInt(cardAttr3, 10)) <= SUM_MAX) {
      return true;
    }
    return false;
  }

  updateState(field, value) {
    this.setState({
      [field]: value,
    });
  }

  handelChange(target) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  saveCard() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo } = this.state;
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    const stateTrunfo = (cardTrunfo || hasTrunfo);
    this.setState((oldState) => ({
      cards: [...oldState.cards, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      hasTrunfo: stateTrunfo,
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      isValid: false,
    }));
  }

  deleteCard(index) {
    const { cards } = this.state;
    const newCards = cards
      .reduce((acc, current, indexCard) => (
        (indexCard !== index) ? [...acc, current] : [...acc]), []);
    this.setState({
      cards: [...newCards],
    });
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, cards } = this.state;

    return (
      <div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handelChange }
          onSaveButtonClick={ this.saveCard }
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
        <Cards
          cards={ cards }
          deleteCard={ this.deleteCard }
        />
      </div>
    );
  }
}

export default App;
