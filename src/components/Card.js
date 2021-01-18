import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {

  const onClickDelete = () => {
    props.onDeleteCallback(props.id);
  }

  return (
    <div className="card">
      <h2 className="card__content">
        <p className="card__content-text">{props.text}</p>
        <p className="card__content-emoji">{emoji.getUnicode(`${props.emoji}`)}</p>
        <button className="card__delete" onClick={onClickDelete}>Delete</button>
      </h2>
    </div>
    
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired, 
  text: PropTypes.string,
  emoji: PropTypes.string,
  onDeleteCallback: PropTypes.func.isRequired, 
};

export default Card;
