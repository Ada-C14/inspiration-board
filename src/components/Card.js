import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  const [updateFields, setUpdateFields] = useState({
    text: '',
    emoji: '',
  });

  const showEmoji = (emojiString) => {
    return emoji.getUnicode(emojiString)
  };

  const onUpdateFieldChange = (event) => {
    const newUpdateFields = {...updateFields,};
    newUpdateFields[event.target.name] = event.target.value;
    setUpdateFields(newUpdateFields);
  };

  const onUpdateSubmit = (event) => {

  };
// onClick = {
//   () => props.onUpdateCardCallback(props.id)
// }
  function myFunction() {
    document.getElementById("messageDropdown").classList.toggle("show");
  };

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
        <div className='dropdown'>
          <button onClick='myFunction()' className='card__delete'>Update Message</button>
          <div id='messageDropdown' class='dropdown__content'>
            <label>Change Message</label>
            <input id='text' name='text'
                onChange={onUpdateSubmit}
                value={updateFields.text}/>
          </div>
          <button onClick='myFunction()' className='card__delete'>Update Emoji</button>
        </div>
        <form onSubmit={onUpdateSubmit}>
          <label>Change Message</label>
          <input id='text' name='text' 
              onChange={onUpdateFieldChange} 
              value={updateFields.text}/>
          <label>Change Emoji</label>
          <input id='text' name='text'
              onChange = {onUpdateFieldChange}
              value = {updateFields.emoji}/>
        </form>
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
