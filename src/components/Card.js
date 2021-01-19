import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {

  const onButtonClick = () => {
    props.deleteCard(props.id)
  }

  return (
    <div className="card">
      <div className = 'card__content'>
        <div className = 'card__content-text'>{props.text}</div>
        <div className = 'card__content-emoji'>{props.emoji ? emoji.getUnicode(props.emoji) : ''}</div>
        <input type="button" value="Delete" className="card__delete" onClick = {onButtonClick}/>
      </div>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
