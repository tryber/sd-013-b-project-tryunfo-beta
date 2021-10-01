import React from 'react';
import { Form, Card } from './components';

const MIN_ATTR = 0;
const MAX_ATTR = 90;
const MAX_POINTS = 210;
const INITIAL_CARD_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_CARD_STATE,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
  }

  handleClick(name, description, cardTrunfo) {
    const { cards } = this.state;

    if (cardTrunfo) {
      this.setState({ hasTrunfo: false });
    }

    this.setState({
      cards: cards.filter(({ cardName, cardDescription }) => (
        cardName !== name && cardDescription !== description
      )),
    });
  }

  onInputChange({ target }) {
    const { name, value, checked } = target;
    this.setState({
      [name]: name === 'cardTrunfo' ? checked : value,
    }, () => this.validateInputs());
  }

  onSaveButtonClick(e) {
    e.preventDefault();
    const { isSaveButtonDisabled, cards, ...newCard } = this.state;
    this.setState((prevState) => ({
      cards: [...prevState.cards, newCard],
      ...INITIAL_CARD_STATE,
      hasTrunfo: !prevState.hasTrunfo && prevState.cardTrunfo,
    }));
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
      hasTrunfo,
      cards,
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
          hasTrunfo={ hasTrunfo }
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
        {
          cards.map((card) => (
            <div key={ card.cardName }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <button
                type="button"
                data-testid="delete-button"
                onClick={ () => this.handleClick(
                  card.cardName, card.cardDescription, card.cardTrunfo,
                ) }
              >
                Excluir
              </button>
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
