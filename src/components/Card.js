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
      <div className='card__delete'>
        <button className='card__delete-button'
          onClick={() => props.deleteCard(props.id)}
        >
          Delete
        </button>
      </div>
      
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number,
  deleteCard: PropTypes.func.isRequired

};

export default Card;
