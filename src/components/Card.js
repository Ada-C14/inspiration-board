import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className= "card_content">
      <p className="card__content_text">You can do it Ana!!</p>
      <p className="card__content_emoji">{emoji.getUnicode("heart eyes")}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired
};

export default Card;
