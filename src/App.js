import React from 'react';
import { Form, Card, Input, Checkbox, Select } from './components';

import './App.css';

const MIN_ATTR = 0;
const MAX_ATTR = 90;
const MAX_POINTS = 210;
const RARITY_OPTIONS = ['todas', 'normal', 'raro', 'muito raro'];

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
      filters: {
        nameFilter: '',
        rareFilter: RARITY_OPTIONS[0],
        trunfoFilter: false,
      },
      isSaveButtonDisabled: true,
      cards: [],
    };

    this.handleDeleteBtn = this.handleDeleteBtn.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
  }

  handleDeleteBtn(name, cardTrunfo) {
    const { cards } = this.state;

    this.setState({
      cards: cards.filter(({ cardName }) => cardName !== name),
      hasTrunfo: !cardTrunfo,
    });
  }

  onInputChange({ target }) {
    const { name, value, checked, type } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    }, () => this.validateInputs());
  }

  onFilterChange({ target }) {
    const { name, value, checked, type } = target;
    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
        [name]: type === 'checkbox' ? checked : value,
      },
    }));
  }

  onSaveButtonClick(e) {
    e.preventDefault();
    const { isSaveButtonDisabled, cards, filters, hasTrunfo, ...newCard } = this.state;
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

  filters(card) {
    const { filters: { trunfoFilter } } = this.state;
    if (trunfoFilter) return card.cardTrunfo;
    const filteredByName = this.filterByName(card);
    const filteredByRare = this.filterByRare(card);
    return filteredByName && filteredByRare;
  }

  filterByName(card) {
    const { filters: { nameFilter } } = this.state;
    return card.cardName.toLowerCase().includes(nameFilter.toLowerCase());
  }

  filterByRare(card) {
    const { filters: { rareFilter } } = this.state;
    return card.cardRare === rareFilter || rareFilter === RARITY_OPTIONS[0];
  }

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
      filters,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <main className="make-card">
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
        </main>
        <hr />
        <div className="filters">
          <Input
            type="text"
            text="Filtrar por nome:"
            name="nameFilter"
            value={ filters.nameFilter }
            onChange={ this.onFilterChange }
            dataTestid="name-filter"
            disabled={ filters.trunfoFilter }
          />
          <Select
            text="Filtrar por raridade:"
            name="rareFilter"
            value={ filters.rareFilter }
            onChange={ this.onFilterChange }
            dataTestid="rare-filter"
            disabled={ filters.trunfoFilter }
            options={ RARITY_OPTIONS }
          />
          <Checkbox
            text="Super Trunfo"
            name="trunfoFilter"
            value={ filters.trunfoFilter }
            onChange={ this.onFilterChange }
            dataTestid="trunfo-filter"
          />
        </div>
        <hr />
        {
          cards.filter((card) => this.filters(card)).map((card) => (
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
                onClick={ () => this.handleDeleteBtn(
                  card.cardName, card.cardTrunfo,
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
