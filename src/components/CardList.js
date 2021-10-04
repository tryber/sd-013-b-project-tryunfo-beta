import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

class CardList extends Component {
  render() {
    const { cardList } = this.props;

    return (
      cardList && cardList.map((card, index) => (
        <Card key={ index } { ...card } />
      ))
    );
  }
}

CardList.propTypes = {
  cardList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
