import PropTypes from 'prop-types';
import React from 'react';

class CardList extends React.Component {
  render() {
    const { cardList } = this.props;
    console.log(cardList);
    return (
      <div>
        <h1>Cards List</h1>
        {cardList.length >= 1 ? cardList.map((card, index) => (
          <div key={ index }>
            <h3>{card.name}</h3>
            <h3>{card.description}</h3>
            <h3>{card.attr1}</h3>
            <h3>{card.attr2}</h3>
            <h3>{card.attr3}</h3>
            <h3>{card.image}</h3>
            <h3>{card.rarity}</h3>
          </div>
        )) : <h1>Deck Vazio</h1>}
      </div>
    );
  }
}

CardList.propTypes = {
  cardList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    attr1: PropTypes.number.isRequired,
    attr2: PropTypes.number.isRequired,
    attr3: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    rarity: PropTypes.string.isRequired,
  })).isRequired,
};

export default CardList;
