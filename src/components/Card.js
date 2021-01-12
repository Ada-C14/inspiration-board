import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      Card
      <p>{props.text} {props.emoji}</p>
    </div>
  )
}

Card.propTypes = {

};

export default Card;
