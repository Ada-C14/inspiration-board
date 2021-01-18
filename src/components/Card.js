import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className='card__content'>
        <p className='card__content-text'>{props.text}</p>
        <p className='card__content-emoji'>{props.emoji ? emoji.getUnicode(`${props.emoji}`) : ''}</p>
      </div>
      <div className='card__delete'>
        <button className='card__delete-button' onClick={() => props.deleteCard(props.id)}>Delete Card</button>
      </div>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.number,
  emoji: PropTypes.string,
  id: PropTypes.number,
  deleteCard: PropTypes.func
};

export default Card;
