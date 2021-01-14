import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className= "card_content">
      <p className="card_content_text">You can do it!!</p>
      <p className="card_content_emoji">{emoji.getUnicode ("heart eyes")}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;
