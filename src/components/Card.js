import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {

  // // Event callback functions
  // const onButtonClick = (props) => {
  //   const deleteCard = {
  //     id: props.id,
  //     // text: props.text,
  //     // emoji: props.emoji
  //   }
  //   props.deleteCardCallback(deleteCard);
  // }


  return (
    <div className="card">
      <div className="card__content">
        <p className="card__content-text ">{props.text}</p>
        <p className="card__content-emoji">{props.emoji ? emoji.getUnicode(props.emoji) : "" } </p>
      </div>
      <button className="card__delete" onClick={() => props.onDeleteCardCallback(props.id)}>Delete</button>
    </div>
  )
}

Card.propTypes = {
id: PropTypes.number.isRequired,
text: PropTypes.string,
emoji: PropTypes.string,
onDeleteCardCallback: PropTypes.func.isRequired
};

export default Card;
