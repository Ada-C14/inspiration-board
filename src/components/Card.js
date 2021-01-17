import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

const Card = (props) => {
  const emoji = require("emoji-dictionary");

  return (
    <div className="card">
    {props.text}
    { emoji.getUnicode(`${props.emojis}`)}
    <button
      onClick={() => props.deleteStudentCallback(props.id)}
      className="delete-btn"> Delete 
    </button>
    </div>
  )
}


Card.propTypes = {

};

export default Card;
