import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      Card
      <div>
        <p className="card__content-text">{props.text}</p>
        <p className="card__content-emoji">{emoji.getUnicode(`${props.emojiText}`)}</p>
      </div>
      <button onClick={() => props.onDeleteCard(props.id)} className='card__delete'>
        Delete
      </button>
    </div>
  )
}

Card.propTypes = {

};

export default Card;
