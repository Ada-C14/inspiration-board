import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {

  const deleteCardFunction = () => {
    props.deleteFunction(props.id)
  }
  return (
    <div className="card">
      <div className="card__content">{props.text}
      {props.emoji? emoji.getUnicode(props.emoji) : null}
      <button onClick={deleteCardFunction} className="card__delete">Delete Card</button>
      </div>
    </div>
  )
}

Card.propTypes = {

};

export default Card;
