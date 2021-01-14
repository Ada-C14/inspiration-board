import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  
  return (
    <div className="card">
      <article className="card__content">
        <p className="card__content-text">{ props.text }</p>
        <p className="card__content-emoji">{ props.emojiText ? emoji.getUnicode(props.emojiText) : ' '}</p>
      </article> 
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emojiText: PropTypes.string.isRequired
};

export default Card;
