import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__content">
        { (props.text) ? <div className="card__content-text">{props.text}</div> : <span />}
        { (props.emoji) ? <div className="card__content-emoji">{emoji.getUnicode(`${props.emoji}`)}</div> : <span />}
      </div>
    </div>
  )
}

Card.propTypes = {
  // DONT FORGET TO ADD MEEEEE
};

export default Card;
