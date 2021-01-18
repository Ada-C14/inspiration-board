import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  const onCardDelete = (event) => {
    event.preventDefault();

    props.deleteCardCallBack(props.id);
  }

  return (
    <div className="card">
      <p>{props.text}</p>
      <p>{props.emoji ? emoji.getUnicode(props.emoji ) : ''}</p>
      <button onClick={onCardDelete}>delete</button>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string
};

export default Card;
