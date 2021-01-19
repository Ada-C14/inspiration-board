import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__content">
        <p className="card__content-text">{props.card.text}</p>
        <p className="card__content-emoji">{props.card.emoji ? emoji.getUnicode(props.card.emoji) : ''}</p>
      </div>
    </div>
  )
}

Card.propTypes = {

};

export default Card;
