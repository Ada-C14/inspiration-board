import React, { useState, Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  // const {idNum, text, emojiString} = {...props}
  // const [id, setId] = useState('');
  // const [message, setMessage] = useState('');
  // const [emojiName, setEmojiName] = useState('');

  return (
    <div className="card">
      <p></p>
      <p>Inspirational Message: {props.text}</p>
      <p>Emoji: {props.emojiName ? emoji.getUnicode(props.emojiName) : emoji.getUnicode('hatching_chick')}</p>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  emojiName: PropTypes.string,
};

export default Card;