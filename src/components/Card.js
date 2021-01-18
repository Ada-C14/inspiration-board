import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = ({ card, deleteCard }) => {
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
        <button className="card__delete" onClick={ () => { deleteCard(card.id) } }>
          🗑 Delete
        </button>
      </div>
    </div>
  )
}

Card.propTypes = {
  card: PropTypes.shape({
    emoji: PropTypes.string,
    id: PropTypes.number,
    text: PropTypes.string,
  }),
  deleteCard: PropTypes.func.isRequired,
};

export default Card;
