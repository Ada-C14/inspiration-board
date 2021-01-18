import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <p>{props.text}</p>
      <p>{props.emoji ? emoji.getUnicode(`${props.emoji}`) : ''}</p>
      <div>
        <button onClick={() => props.deleteCard(props.id)}>Delete Card</button>
      </div>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.number,
  emoji: PropTypes.string,
  id: PropTypes.number,
  deleteCard: PropTypes.func
};

export default Card;
