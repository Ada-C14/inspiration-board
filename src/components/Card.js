import React from 'react';
import PropTypes from 'prop-types';
import emojiName from 'emoji-dictionary';

import './Card.css';

const Card = ({card, deleteCardCallback}) => {
  const { id, text, emoji } = card

  return (
    <div className="card">
      {text ? text : null}
      {emoji ? emojiName.getUnicode(emoji) : null}
      <button onClick={() => deleteCardCallback(id)}>Delete Card</button>
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
