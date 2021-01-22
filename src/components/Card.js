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
      {props.text}
      {props.emoji? emoji.getUnicode(props.emoji) : null}
      <button onClick={deleteCardFunction}>Delete Card</button>
    </div>
  )
}

Card.propTypes = {

};

export default Card;
