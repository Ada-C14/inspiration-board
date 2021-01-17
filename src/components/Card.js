import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = () => {
  return (
    <div className="card">
      Card
    </div>
  )
}

Card.propTypes = {
  card: PropTypes.shape({
    emoji: PropTypes.string,
    text: PropTypes.string
  })
};

export default Card;
