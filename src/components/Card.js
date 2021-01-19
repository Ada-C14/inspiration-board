import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
  
import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <figure className="card__content">
        <div className="card__content-text">
          {props.text}
        </div>
        <div className="card__content-emoji">
          {emoji.getUnicode(props.emoji)}
        </div>
        <div className="card__delete">
          <button onClick={() => props.onDeleteCallback(props.id)
          }>Delete Card</button>
        </div>
      </figure>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  emoji: PropTypes.string,  
  onDeleteCallback: PropTypes.func.isRequired,
};

export default Card;
