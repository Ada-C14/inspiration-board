import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({card, deleteCardCallback}) => {
  return (
    <div className="card">
      <div className='card__content'>
        <p className='card__content-text'>text: {card.text}</p>
        <p className='card__content-emoji'>emoji: {card.emoji}</p>
      </div>
      <button className='card__delete'
        onClick={() => deleteCardCallback(card.id)}
      >
        Delete
      </button>
    </div>
 
  )
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  deleteCardCallback: PropTypes.func.isRequired
};

export default Card;
