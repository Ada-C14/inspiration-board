import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
// example: emoji.getUnicode("heart_eyes")
import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className='card__content'>
        <div className='card__content-text'>{props.message.text}</div>
        <div className='card__content-emoji'>{props.message.emoji && emoji.getUnicode(props.message.emoji)}</div>
      </div>
    </div>
  )
}




Card.propTypes = {

};

export default Card;
