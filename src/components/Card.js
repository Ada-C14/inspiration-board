import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card" key={props.id}>
      <div className="card__content">
        <p className="card__content-text">{ props.text }</p>
        <p className="card__content-emoji">{ props.emoji ? emoji.getUnicode(props.emoji) : null }</p>
        <button
          onClick={() => props.deleteCardCallback(props.id)}
          className="card__delete"
        >DELETE</button>
      </div>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string, 
  deleteCardCallback: PropTypes.func
  // id
};

export default Card;
