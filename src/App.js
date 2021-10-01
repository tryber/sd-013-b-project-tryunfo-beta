import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import CardsDeck from './components/CardsDeck';

const LIMIT = 90;
const MAXPOINTS = 210;

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
      cardRare: '',
      rareFil: 'todas',
      id: 0,
      filterTrunf: false,
      filterDisabled: false,
      nameFilter: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.verifyButton = this.verifyButton.bind(this);
    this.validationCardName = this.validationCardName.bind(this);
    this.validationCardDesc = this.validationCardDesc.bind(this);
    this.verifyTrunfo = this.verifyTrunfo.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.filters = this.filters.bind(this);
    this.changeDisable = this.changeDisable.bind(this);
  }

  onSaveButtonClick() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardTrunfo, cardRare, id } = this.state;
    const newObj = {
      cardTrunfo,
      cardDescription,
      cardName,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      id,
    };
    this.setState((prevState) => ({
      cards: [...prevState.cards, newObj],
      id: prevState.id + 1,
    }), () => this.verifyTrunfo());
    this.setState({ cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardTrunfo: false,
    });
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.changeDisable());
    this.verifyButton();
  }

  sumAtt = (att1, att2, att3) => (Number(att1)
  + Number(att2) + Number(att3) <= MAXPOINTS);

  verifyRange = (att) => (Number(att) >= 0 && Number(att) <= LIMIT)

  deleteCard(id, cards) {
    const indexOfcard = cards.indexOf((element) => element.id !== id);
    const arraySliçado = cards.slice(indexOfcard, 0);
    this.setState({ cards: arraySliçado, hasTrunfo: false });
  }

  changeDisable() {
    const { filterTrunf } = this.state;
    if (filterTrunf) {
      this.setState((prevState) => ({
        filterDisabled: !prevState.filterDisabled,
      }));
    }
    if (!filterTrunf) {
      this.setState({ filterDisabled: false });
    }
  }

  verifyTrunfo() {
    const { cards } = this.state;
    if (cards.some((element) => element.cardTrunfo === true)) {
      this.setState({ hasTrunfo: true });
    }
  }

  verifyButton() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const { verifyRange, sumAtt } = this;
    // Recebi ajuda do felipe ventorin nessa, source = https://github.com/tryber/sd-013-b-project-tryunfo-beta/blob/felipeventorim-project-tryunfo-beta/src/App.js
    const haveToDisable = (
      this.validationCardDesc(cardDescription)
    && this.validationCardName(cardName)
     && verifyRange(cardAttr1)
    && verifyRange(cardAttr2)
    && verifyRange(cardAttr3)
    && sumAtt(cardAttr1, cardAttr2, cardAttr3)
    );
    this.setState({ isSaveButtonDisabled: !haveToDisable });
  }

  validationCardName(cardName) {
    if (cardName !== '') {
      return true;
    }
    return false;
  }

  validationCardDesc(cardDesc) {
    if (cardDesc !== '') {
      return true;
    }
    return false;
  }

  filters() {
    const { nameFilter, rareFil, cards, filterTrunf } = this.state;
    if (nameFilter !== '') {
      return cards.filter((element) => element.cardName.includes(nameFilter));
    }
    if (rareFil !== 'todas') {
      return cards.filter((element) => element.cardRare === rareFil);
    }
    if (filterTrunf === true) {
      return cards.filter((element) => element.cardTrunfo === true);
    }
    return cards;
  }

  render() {
    const { cards, filterDisabled } = this.state;
    const defaultProps = {
      ...this.state,
    };
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...defaultProps }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <label htmlFor="name-filter">
          Filtre por nome:
          <input
            type="text"
            name="nameFilter"
            data-testid="name-filter"
            onChange={ this.onInputChange }
            disabled={ filterDisabled }
          />
        </label>
        Filtrar por raridade:
        <select
          disabled={ filterDisabled }
          name="rareFil"
          data-testid="rare-filter"
          onChange={ this.onInputChange }
        >
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <label htmlFor="super-trunfo-filter">
          Filtrar por Super Trunfo
          <input
            type="checkbox"
            onChange={ this.onInputChange }
            name="filterTrunf"
            data-testid="trunfo-filter"
          />
        </label>
        <Card { ...defaultProps } cards={ cards } />
        <CardsDeck
          cards={ cards }
          delCards={ this.deleteCard }
          filters={ this.filters }
        />
      </div>
    );
  }
}

export default App;
