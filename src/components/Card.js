import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
      <div className='card__content'>
        <p className='card__content-text'>{props.text}</p>
        <p className='card__content-emoji'>{props.emoji}</p>        
      </div>
      <div>      
        <button className='card_delete' onClick={() => props.onDeleteCard(props.id)}>X</button>
      </div>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number,
  onDeleteCard: PropTypes.func.isRequired
};

export default Card;
