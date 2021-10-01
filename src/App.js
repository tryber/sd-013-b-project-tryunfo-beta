import React from 'react';
import './App.css';
import Card from './components/Card';
import Cards from './components/Cards';
import Form from './components/Form';
import Input from './components/Input';
import Select from './components/Select';

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
      cardNameFilter: '',
      cardRareFilter: 'todas',
      cardTrunfoFilter: false,
    };
    this.handelChange = this.handelChange.bind(this);
    this.updateState = this.updateState.bind(this);
    this.validationData = this.validationData.bind(this);
    this.getIsNumberValid = this.getIsNumberValid.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.getCardsFiltered = this.getCardsFiltered.bind(this);
    this.getCardsRareFilter = this.getCardsRareFilter.bind(this);
    this.getCardsNameFilter = this.getCardsNameFilter.bind(this);
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

  getCardsNameFilter(datas) {
    const { cardNameFilter } = this.state;
    return (
      (cardNameFilter !== '')
        ? datas.filter((data) => data.cardName.includes(cardNameFilter))
        : datas
    );
  }

  getCardsRareFilter() {
    const { cards, cardRareFilter } = this.state;
    return (
      (cardRareFilter !== 'todas')
        ? cards.filter((card) => card.cardRare === cardRareFilter)
        : cards
    );
  }

  getCardsFiltered() {
    const { cards, cardTrunfoFilter } = this.state;
    return ((cardTrunfoFilter)
      ? cards.filter((card) => card.cardTrunfo === true)
      : this.getCardsNameFilter(this.getCardsRareFilter())
    );
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
      isSaveButtonDisabled, cardNameFilter,
      cardRareFilter, cardTrunfoFilter } = this.state;

    return (
      <div className="body">
        <div className="main-sup">
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
        </div>
        <div className="cards-body">
          <div className="cards-header">
            <h1>Todas as Cartas</h1>
            <div className="cards-header-filter">
              <h3>Filtros de busca</h3>
              <Input
                placeHolder="Nome da carta"
                name="cardNameFilter"
                type="text"
                id="name-filter"
                dataTestId="name-filter"
                value={ cardNameFilter }
                setValue={ this.handelChange }
              />
              <Select
                name="cardRareFilter"
                options={ ['todas', 'normal', 'raro', 'muito raro'] }
                text="Raridade"
                id="rare-filter"
                dataTestId="rare-filter"
                value={ cardRareFilter }
                setValue={ this.handelChange }
              />
              <Input
                name="cardTrunfoFilter"
                type="checkbox"
                text="Super Trybe Trunfo"
                id="trunfo-filter"
                dataTestId="trunfo-filter"
                value={ cardTrunfoFilter }
                setValue={ this.handelChange }
              />
            </div>
          </div>
          { this.getCardsFiltered().length !== 0
            && <Cards
              cards={ this.getCardsFiltered() }
              deleteCard={ this.deleteCard }
            /> }
        </div>
      </div>
    );
  }
}

export default App;
