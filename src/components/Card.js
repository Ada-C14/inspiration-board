import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji_dict from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  
  const onButtonClick = () => {
    props.deleteCardCallback(props.key)
  }
  return (
    <div className="card">
      <ul className="card__content">
        <li className="card__content-text">
          {props.text}
        </li>
        <li className="card__content-emoji">
          {props.emoji === null ? '' : emoji_dict.getUnicode(props.emoji)}
        </li>
      </ul>
      <button 
      className='card__delete'
      onClick={() => props.deleteCardCallback(props.id)}>Delete</button>
    </div>
  )
}

Card.propTypes = {

};

export default Card;
