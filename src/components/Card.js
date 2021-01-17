import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      { (props.text) ? <p>{props.text}</p> : <span />}
      { (props.emoji) ? <p>{emoji.getUnicode(`${props.emoji}`)}</p> : <span />}
    </div>
  )
}

Card.propTypes = {
  // DONT FORGET TO ADD MEEEEE
};

export default Card;
