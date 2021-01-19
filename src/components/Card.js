import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__content">
        <p className="card__content-text">{props.text}</p>
        <p className="card__content-emoji">{ props.emoji ? emoji.getUnicode(props.emoji) : null }</p>
        <button
          onClick={() => props.deleteCardCallback(props.id)}
          className="card__delete"
        >Delete</button>
      </div>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCardCallback: PropTypes.func
};

export default Card;
