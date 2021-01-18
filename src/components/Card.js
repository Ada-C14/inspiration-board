import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

const Card = (props) => {

  const handleDelete = () => {
    props.deleteCallback(props.card.id)
  }
  return (
    <div className="card">

      <div className='card__content'>
        <div className='card__content-text'>{props.card.text}</div>
        <div className='card__content-emoji'>{props.card.emoji && emoji.getUnicode(props.card.emoji)}</div>
      </div>

      <button className="card__delete" onClick={handleDelete}>
        Delete
      </button>
    </div>
  )
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  deleteCallback: PropTypes.func.isRequired
};

export default Card;
