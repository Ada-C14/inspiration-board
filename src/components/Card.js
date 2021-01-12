import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = ({id, text, cardEmoji, deleteCardCallback}) => {
  return (
    <div className="card">
      {text ? text : null}
      {cardEmoji ? emoji.getUnicode(cardEmoji) : null}
      <button onClick={() => deleteCardCallback(id)}>Delete Card</button>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  cardEmoji: PropTypes.string,
  deleteCardCallback: PropTypes.func.isRequired
};

export default Card;
