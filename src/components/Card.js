import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <ul className="card__content">
        <li className="card__content-text">
          {props.text}
        </li>
        <li className="card__content-emoji">
          {props.emoji}
        </li>
      </ul>
    </div>
  )
}

Card.propTypes = {

};

export default Card;
