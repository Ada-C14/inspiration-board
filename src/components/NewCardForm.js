import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import emojiDictionary from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = ({ addCard }) => {
  const [cardFields, setCardFields] = useState({
    emoji: '',
    text: '',
  });

  const onInputChange = (event) => {
    console.log(`Changing field ${ event.target.name } to ${ event.target.value }`);
    // Duplicate formFields into new object
    const newCardFields = {
      ...cardFields,
    }
  
    newCardFields[event.target.name] = event.target.value;
    setCardFields(newCardFields);
  }

  const onCardSubmit = (event) => {
    event.preventDefault();

    addCard(cardFields);

    setCardFields({
      emoji: '',
      text: '',
    });
  };

  const emojiOptions = EMOJI_LIST.map((emoji) =>
    <option value={emoji}>{ emojiDictionary.getUnicode(emoji) }</option>
  );

  return (
    <div className="new-card-form">
      <header className="new-card-form__header">Add A New Card</header>
      <form
        className="new-card-form__form"
        onSubmit={ onCardSubmit }
      >
        <div>
          <label className="new-card-form__form-label">Text: </label>
          <input
            name="text"
            onChange={ onInputChange }
            value={ cardFields.text }
            className="new-card-form__form-textarea"
          />
        </div>
        <br/>
        <div>
          <label className="new-card-form__form-label">Emoji: </label>
          <select
            name="emoji"
            onChange={ onInputChange }
            options={ cardFields.emoji }
            value={ cardFields.emoji }
            className="new-card-form__form-select"
          >
            { emojiOptions }
          </select>
        </div>
        <br/>
        <input
          className="new-card-form__form-button"
          type="submit"
          value="Add Card"
        />
      </form>
    </div>
  );
}

NewCardForm.propTypes = {
  addCard: PropTypes.func.isRequired,
}

export default NewCardForm;