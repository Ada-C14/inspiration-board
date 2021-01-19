import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <p>{props.quote}</p>
      <p>{props.emoji</p>
    </div>
  )
}

Card.propTypes = {
  quote: PropTypes.string,
  emoji: PropTypes.string
};

export default Card;
