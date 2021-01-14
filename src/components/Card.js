import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      {props.card.text}
      <button className="card__delete" onClick={() => props.deleteCardCallback(props.id)}>Delete Card</button>
    </div>
  )
}

Card.propTypes = {

};

export default Card;
