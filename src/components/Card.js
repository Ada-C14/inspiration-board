import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <ul>
        <li>
          {props.text}
        </li>
        <li>
          {props.emoji}
        </li>
      </ul>
    </div>
  )
}

Card.propTypes = {

};

export default Card;
