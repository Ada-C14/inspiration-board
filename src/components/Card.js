// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__content">
        <p className="card__content-text">{props.text ? props.text : ''}</p>
        <p className="card__content-emoji">{props.emojiText ? emoji.getUnicode(props.emojiText) : ''}</p>
      </div>
      <div>
        <button className="card__delete" onClick={() => props.onDeleteCallback(props.id)}>Delete</button>
      </div>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  emojiText: PropTypes.string.isRequired,
  onDeleteCallback: PropTypes.func.isRequired
};

export default Card;
