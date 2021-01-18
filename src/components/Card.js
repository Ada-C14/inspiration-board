import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <div>
      <p className='card__content-text'>{props.text}</p>
      </div>
      
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number

};

export default Card;
