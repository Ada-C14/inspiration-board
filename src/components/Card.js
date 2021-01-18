import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__content">
        {props.id}
        <p className="card__content-text">
          {props.quote || ''}
        </p>
        <p className="card__content-emoji">
          {props.emoji}
        </p>
      </div>
    </div>
  )
}

Card.propTypes = {
  quote: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number.isRequired
};

export default Card;
