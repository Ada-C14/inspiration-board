import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = ({ card }) => {
  return (
    <div className="card">
      <div className="card__content">
        {
          card.text &&
          <p className="card__content-text">
            { card.text }
          </p>
        }
        {
          card.emoji &&
          <p className="card__content-emoji">
            { emoji.getUnicode(card.emoji) }
          </p>
        }
      </div>
    </div>
  )
}

Card.propTypes = {
  card: PropTypes.shape({
    emoji: PropTypes.string,
    text: PropTypes.string,
  })
};

export default Card;
