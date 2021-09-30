import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { defaultProps } = this.props;
    return (
      <div>
        <p>{defaultProps.cardName}</p>
      </div>
    );
  }
}

Card.propTypes = {
  defaultProps: PropTypes.shape({
    cardName: PropTypes.string,
  }).isRequired,
};

export default Card;
