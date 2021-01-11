import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = ({text, cardEmoji}) => {
  return (
    <div className="card">
      {text ? text : null}
      {cardEmoji ? emoji.getUnicode(cardEmoji) : null}
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  cardEmoji: PropTypes.string,
};

export default Card;
