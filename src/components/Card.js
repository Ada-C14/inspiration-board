import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {

  return (
    <div className="card">
      <div className="card__content">
        <p className="card__content-text">{ props.text }</p>
        { props.emoji ? <p className="card__content-emoji">{ emoji.getUnicode(props.emoji) }</p> : null }
        <button onClick={ () => props.onDeleteCallback(props.id) }>delete?</button>
      </div>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number,
  onDeleteCallback: PropTypes.func,
};

export default Card;
