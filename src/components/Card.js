import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = () => {
  return (
    <div className="card">
      Card
      <div>
        <p className="card__content-text">Every moment is a fresh beginning{emoji.getUnicode("heart_eyes")}</p>
      </div>
    </div>
  )
}

Card.propTypes = {

};

export default Card;
// Every moment is a fresh beginning