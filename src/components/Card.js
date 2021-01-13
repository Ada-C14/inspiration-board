import React from 'react';
import PropTypes from 'prop-types';
import emojiName from 'emoji-dictionary';

import './Card.css';

const Card = ({card, deleteCardCallback}) => {
  const { id, text, emoji } = card

  return (
    <div className="card">
      <div className="card__content">
        <p className="card__content-text">{text ? text : null}</p>
        <p className="card__content-emoji">{emoji ? emojiName.getUnicode(emoji) : null}</p>
      </div>
      <button className="card__delete" onClick={() => deleteCardCallback(id)}>Delete Card</button>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCardCallback: PropTypes.func.isRequired
};

export default Card;
