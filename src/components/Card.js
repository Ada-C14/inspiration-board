import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {

const showEmoji = (emojiString) => {
  return emoji.getUnicode(emojiString)
}



  return (
    <div className="card">
      <div className="card__content">
        <div className="card__content-text">
          {props.text}
        </div>
        <div className="card__content-emoji">
          {showEmoji(props.emoji)}
        </div>
        <button onClick={() => props.onDeleteCardCallback(props.id)}
        className="card__delete">Remove</button>
      </div>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  onDeleteCardCallback: PropTypes.func.isRequired
};

export default Card;
