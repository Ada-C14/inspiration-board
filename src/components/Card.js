import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  // const removeCard = () => {
  //   props.deleteCard(props.id);
  // }

  return (
    <div className="card">
      <div className="card__content">
        { (props.text) ? <div className="card__content-text">{props.text}</div> : <span />}
        { (props.emoji) ? <div className="card__content-emoji">{emoji.getUnicode(`${props.emoji}`)}</div> : <span />}
        {/* <div className="card__delete"><button className="card__delete" onClick = {removeCard}>delete</button></div> */}
        <button className="card__delete" onClick={() => props.deleteCard(props.id)}>Delete</button>
      </div>
    </div>
  )
};

Card.propTypes = {
  id: PropTypes.number.isRequired, 
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string,
  deleteCard: PropTypes.func.isRequired
};

export default Card;
