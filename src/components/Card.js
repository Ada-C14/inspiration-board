import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <section className="card__content">
        <h4 className="card__content-text">{props.text}</h4>
        <h4 className="card__content-emoji">{emoji.getUnicode(props.emoji) || props.emoji}</h4>
      </section>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCard: PropTypes.func.isRequired
};

export default Card;
