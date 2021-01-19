import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

const Card = (props) => {
  return (

    <div className="card">
      Card
      <ul className="card_content">
        {props.text && 
      <li className="card_content-text">{props.text}</li>}
      {props.emoji && 
      <li className="card_content-emoji">{emoji.getUnicode(`${props.emoji}`)}</li>}
      </ul>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string
};

export default Card;
