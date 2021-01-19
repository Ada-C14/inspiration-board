import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const CARD_COLORS = [
  'bg-color-yellow',
  'bg-color-pink',
  'bg-color-orange'
];

const Card = props => {
  const cardColor = CARD_COLORS[Math.floor(Math.random() * CARD_COLORS.length)];

  return (
    <div className={`card ${cardColor}`}>
      <button className="delete-button" onClick={ () => props.deleteCardCallback(props.id) }>
        X
      </button>
      <div className={`card__content ${cardColor}`}>
        <p className={`card__content-text ${cardColor}`}>
          { props.optionalText ? props.optionalText : null }
        </p>
        <p className={`card__content-emoji ${cardColor}`}>
          { props.optionalEmoji ? emoji.getUnicode(props.optionalEmoji) : null }
        </p>
      </div>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  optionalText: PropTypes.string,
  optionalEmoji: PropTypes.string,
  deleteCardCallback: PropTypes.func.isRequired
};

export default Card;
