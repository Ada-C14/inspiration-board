import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__content">
        <p className="card__content-text">{props.text}</p>
        <p className="card__content-emoji">{props.emoji ? emoji.getUnicode(props.emoji) : ''}</p>
        <button className="card__delete" onClick={() => props.onDeleteCard(props.id)}>Delete Card</button>
      </div>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  emoji: PropTypes.string,
  onDeleteCard: PropTypes.func.isRequired
};

export default Card;
