import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <p>{props.text}</p>
      <p>{props.emoji}</p>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.number,
  emoji: PropTypes.string,
};

export default Card;
