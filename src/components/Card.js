import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className= "card_content">
      <p className="card__content-text">{props.text ? props.text : ''}</p>
      <p className="card__content-emoji">{props.emoji ? emoji.getUnicode(props.emoji) : '' }</p>
      <button className="card__delete" onClick={ () => props.onDeleteCallback(props.id)}>Delete</button>
      </div>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string,
  onDeleteCallback: PropTypes.func.isRequired
}; 

export default Card;
