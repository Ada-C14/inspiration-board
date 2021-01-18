import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      {props.card.text}
      {props.card.emoji ? emoji.getUnicode(props.card.emoji) : ''}
    </div>
  )
}

Card.propTypes = {
  card: PropTypes.objectOf(PropTypes.shape(
    {
      id: PropTypes.number,
      text: PropTypes.string,
      emoji: PropTypes.string,
    }
  ))
};

export default Card;
