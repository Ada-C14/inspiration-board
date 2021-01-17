import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <p>{props.text}</p>
    </div>
  )
}

Card.propTypes = {
  // DONT FORGET TO ADD MEEEEE
};

export default Card;
