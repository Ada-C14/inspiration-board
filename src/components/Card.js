import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

const Card = (props) => {

  return (
    <div className="card">
      <div className='card__content'>
        <p className='card__content-text'>{props.text} </p>
        <p className='card__content-emoji'>{props.emojiName ? emoji.getUnicode(props.emojiName) : null}</p>
      </div>
      <div className='card__delete'>
        <button className='card__delete-button'
          onClick={() => props.deleteCard(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  emojiName: PropTypes.string,
  deleteCard: PropTypes.func.isRequired,
};

export default Card;