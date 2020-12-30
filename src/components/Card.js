import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';


const Card = (props) => {
  
  return (
    <div className="card" id={props.id} >
      {props.text}
      {emoji.getUnicode(`${props.emoji}`)}
      <button onClick={props.onDelete} id={props.id}>
        Delete
      </button>
    </div>
  )
}

Card.propTypes = {
  text:PropTypes.string,
  emoji:PropTypes.string
};

export default Card;
