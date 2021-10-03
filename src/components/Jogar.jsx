import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

import tryunfo from '../images/tryunfo.png';

const NUMBER_SORT = 0.5;

class Jogar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsPlay: [],
      cardIndex: 0,
      startFirstGame: true,
    };
    this.embarealharCartas = this.embarealharCartas.bind(this);
    this.renderNextCartButton = this.renderNextCartButton.bind(this);
    this.renderEmbaralharCartaButton = this.renderEmbaralharCartaButton.bind(this);
    this.nextCard = this.nextCard.bind(this);
    this.renderActualCard = this.renderActualCard.bind(this);
    this.renderBackCard = this.renderBackCard.bind(this);
  }

  componentDidMount() {
    const { startFirstGame } = this.state;
    if (startFirstGame) {
      this.embarealharCartas();
    }
  }

  embarealharCartas() {
    const { cards } = this.props;
    const sortCards = cards.sort(() => Math.random() - NUMBER_SORT);
    this.setState({
      cardsPlay: [...sortCards],
      cardIndex: 0,
      startFirstGame: false,
    });
  }

  nextCard() {
    const { cardsPlay, cardIndex } = this.state;
    if (cardIndex < cardsPlay.length) {
      this.setState((oldState) => ({
        cardIndex: oldState.cardIndex + 1,
      }));
    }
  }

  renderNextCartButton() {
    return (
      <button
        type="button"
        onClick={ () => this.nextCard() }
      >
        { 'Próxima carta >' }
      </button>
    );
  }

  renderActualCard() {
    const { cardsPlay, cardIndex } = this.state;
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = cardsPlay[cardIndex];
    return (
      <>
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
        { cardIndex !== cardsPlay.length - 1 && this.renderNextCartButton() }
      </>
    );
  }

  renderBackCard() {
    const { cardsPlay, cardIndex } = this.state;
    return (
      <div className="jogar-card">
        <div className="card-body">
          <div className="card-main-back">
            <img src={ tryunfo } alt="Logo Tryunfo" />
          </div>
        </div>
        <h3>{ `Cartas restantes: ${(cardsPlay.length - 1) - cardIndex}` }</h3>
      </div>
    );
  }

  renderEmbaralharCartaButton() {
    return (
      <button type="button" onClick={ () => this.embarealharCartas() }>
        Embaralhar cartas
      </button>
    );
  }

  render() {
    const { cardsPlay, cardIndex } = this.state;
    const { endPlay } = this.props;
    return (
      <div className="jogar-body">
        <div className="jogar-cards">
          <div className="jogar-card">
            { cardsPlay.length !== 0 && this.renderActualCard() }
          </div>
          { cardIndex !== cardsPlay.length - 1 && this.renderBackCard() }
        </div>
        <div className="jogar-footer">
          { cardIndex === cardsPlay.length - 1 && this.renderEmbaralharCartaButton() }
          <button type="button" onClick={ () => endPlay() }>
            Encerrar o Jogo
          </button>
        </div>
      </div>
    );
  }
}

Jogar.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      cardName: PropTypes.string.isRequired,
      cardDescription: PropTypes.string.isRequired,
      cardAttr1: PropTypes.string.isRequired,
      cardAttr2: PropTypes.string.isRequired,
      cardAttr3: PropTypes.string.isRequired,
      cardImage: PropTypes.string.isRequired,
      cardRare: PropTypes.string.isRequired,
      cardTrunfo: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  endPlay: PropTypes.func.isRequired,
};

export default Jogar;
