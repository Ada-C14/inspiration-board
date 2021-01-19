import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

const Card = (props) => {
  return (

    <div className="card">
      Card
      <section className="card_content">
        {props.card.text && 
      <p className="card_content-text">{props.card.text}</p>}
      {props.card.emoji && 
      <p className="card_content-emoji">{emoji.getUnicode(`${props.card.emoji}`)}</p>}
      </section>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string
};

export default Card;
