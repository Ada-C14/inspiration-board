import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      Card
      <p className='card__content-text'>{props.text}</p>
      
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number

};

export default Card;
