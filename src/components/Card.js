import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {

  return (
    <div className="card">
      <section className="card__content">
        <h4 className="card__content-text">{props.text}</h4>
        <h4 className="card__content-emoji">{props.emoji ? emoji.getUnicode(props.emoji) : ''}</h4>
        <button onClick={() => props.deleteCardCallback(props.id)}>Delete Card</button>
      </section>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number,
  deleteCardCallback: PropTypes.func.isRequired
};

export default Card;
