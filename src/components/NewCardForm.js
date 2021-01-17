import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = ({sendCard}) => {

  const [cardFields, setCardFields] = useState({
    text: '',
    emoji: ''
  })

  const onCardUpdate = (event) => {
    const newCardFields = {...cardFields};
    newCardFields[event.target.name] = event.target.value;
    setCardFields(newCardFields);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    
    sendCard(cardFields);

    setCardFields({
      text: '',
      emoji: ''
    })
  }

  const generateRadioButtons = () => {
    return (EMOJI_LIST.map((emojiString, i) => {
      return(
        <label key={i}>
        <input  name="emoji" type="radio" onChange={onCardUpdate} value={emojiString} />
          {emojiString==='' ? 'None' : emoji.getUnicode(emojiString)}</label>
      )
    })
    )
  };
  
  return (
    <div className="new-card-form">
      <form onSubmit={onFormSubmit} className="new-card-form__form">
        <h2 className="new-card-form__header">Submit a Card!</h2>
        <div>
          <textarea placeholder="text" name="text" onChange={onCardUpdate} className="new-card-form__form-textarea"></textarea>
          {generateRadioButtons()}
        </div>
        <div>
          <input type="submit" value="Submit Card" className="new-card-form__form-button"/>
        </div>
      </form>

    </div>
  )

};


NewCardForm.propTypes = {
  sendCard: PropTypes.func
};

export default NewCardForm;