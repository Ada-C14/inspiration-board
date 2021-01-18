import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      {props.text}
      {props.emoji ? emoji.getUnicode(props.emoji) : ""} 
      <button 
        onClick={() => props.deleteCardCallback(props.id)}>
        Delete
      </button>
      {/* onClick calls anonymous func that calls callback and passes the id of the card */}
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number.isRequired,
  deleteCardCallback: PropTypes.func.isRequired
};

export default Card;
