import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  
  return (
    <div className="card">
      <button onClick={() => props.deleteCard(props.id)} className="card__delete">x</button>
      <article className="card__content">
        <p className="card__content-text">{ props.text }</p>
        <p className="card__content-emoji">{ props.emojiText ? emoji.getUnicode(props.emojiText) : ' '}</p>
      </article> 
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  emojiText: PropTypes.string,
  id: PropTypes.number.isRequired,
  deleteCard: PropTypes.func.isRequired
};

export default Card;
