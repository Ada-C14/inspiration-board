import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = ({text, emojiString, id, deleteCardCallback}) => {

  return(
    <div className="card">
      <div className="card__content">
        <span className="card__content-text">{text}</span>
        <span className="card__content-emoji">{emojiString ? emoji.getUnicode(emojiString) : ''}</span>
        <button className="card__delete" onClick={() => deleteCardCallback(id)}>Delete</button>
      </div>

  </div>
  )

}

Card.propTypes = {
  text: PropTypes.string,
  emojiString: PropTypes.string,
  id: PropTypes.number,
  deleteCardCallback: PropTypes.func
};

export default Card;
