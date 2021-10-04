import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';
import Button from './Button';

class CardList extends Component {
  render() {
    const { cardList, onDeleteButtonClick } = this.props;

    return (
      cardList
      && cardList.map((card, index) => (
        <div key={ index }>
          <Card { ...card } />
          <Button
            testId="delete-button"
            text="Excluir"
            onClick={ () => onDeleteButtonClick(index, card.cardTrunfo) }
          />
        </div>
      ))
    );
  }
}

CardList.propTypes = {
  cardList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
};

export default CardList;
