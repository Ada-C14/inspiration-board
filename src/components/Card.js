import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {

  return (
    <div className="card">
      Card
      <ul>
        <li>text: {props.text}</li>
        <li>emoji: {props.emoji}</li>
      </ul>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;
