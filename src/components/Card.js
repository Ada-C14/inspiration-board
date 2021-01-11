import React, { useState, Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {

  return (
    <div className="card">
      <p>{props.text}</p>
      {props.emojiName ? 
      <p>Emoji: {emoji.getUnicode(props.emojiName)}</p> : <div></div> }
      <button
        onClick={() => props.deleteCardCallback(props.id)}
        className="delete-btn"
      >
        Delete
      </button>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  emojiName: PropTypes.string,
  deleteCardCallback: PropTypes.func.isRequired,
};

export default Card;