import React, { useState, Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

const Card = (props) => {

  return (
    <div className="card">
      <p className='.card__content-text'>{props.text} </p>
      <p className='.card__content-emoji'>{props.emojiName ? emoji.getUnicode(props.emojiName) : null}</p>
      <button className='.card__delete'
        onClick={() => props.deleteCard(props.id)}
      >
        Delete
      </button>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  emojiName: PropTypes.string,
  deleteCard: PropTypes.func.isRequired,
};

export default Card;