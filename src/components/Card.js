import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  // const [updateCard, setUpdateCard] = useState({
  //   text: '',
  //   emoji: '',
  // });

  const showEmoji = (emojiString) => {
    return emoji.getUnicode(emojiString)
  };

  // const onUpdateFieldChange = (event) => {
  //   const newUpdateFields = {...updateCard};
  //   newUpdateFields[event.target.name] = event.target.value;
  //   setUpdateCard(newUpdateFields);
  // };

  // const onUpdateSubmit = (event) => {
  //   event.preventDefault();

  //   if (updateCard.text !=='' || updateCard.emoji !=='') {
  //     props.onUpdateCardCallback(updateCard);
  //     setUpdateCard({
  //       text: '',
  //       emoji: '',
  //     });
  //   } else {
  //     props.setError('No changes made')
  //   };
  // };

// onClick = {
//   () => props.onUpdateCardCallback(props.id)
// }

  return (
    <div className="card">
      <div className="card__content">
        <div className="card__content-text">
          {props.text}
        </div>
        <div className="card__content-emoji">
          {showEmoji(props.emoji)}
        </div>
        <div><button onClick={() => props.onDeleteCardCallback(props.id)}
        className="card__delete">Remove</button></div>
        {/* <form onSubmit={onUpdateSubmit}>
          <label>Change Message</label>
          <input id='text' name='text' 
              onChange={onUpdateFieldChange} 
              value={updateCard.text}/>
          <label>Change Emoji</label>
          <input id='emoji' name='emoji'
              onChange = {onUpdateFieldChange}
              value = {updateCard.emoji}/>
          <input type = 'submit'
                value = 'Update'
                className = "card__delete" />
        </form> */}
      </div>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  onDeleteCardCallback: PropTypes.func.isRequired,
  onUpdateCardCallback: PropTypes.func.isRequired
};

export default Card;
