import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = props => {
  const [formFields, setFormFields] = useState({
    text: '',
    emoji: ''
  });

  const onInputChange = event => {
    const newFormFields = {
      ...formFields
    };

    const { name, value } = event.target;

    newFormFields[name] = value;

    setFormFields(newFormFields);
  };

  const onFormSubmit = event => {
    event.preventDefault();

    props.addCard(formFields);

    setFormFields({
      text: '',
      emoji: ''
    });
  };

  const generateEmojiOptions = () => {
    return EMOJI_LIST.map((name, i) => <option key={i} value={name}>emoji.getUnicode(name)</option>)
  };
  
  return (
    <div className="new-card-form">
      <h3 className="new-card-form__header">New Card</h3>
      <form className="new-card-form__form" onSubmit={onFormSubmit} >
        <div>
          <label htmlFor="text" className="new-card-form__label">Text: </label>
          <textarea className="new-card-form__textarea" name="text" value={formFields.text} onChange={onInputChange} />
        </div>

        <div>
          <label htmlFor="emoji" className="new-card-form__label">Emoji: </label>
          <select className="new-card-form__select" name="emoji" value={formFields.emoji} onChange={onInputChange}>
            {generateEmojiOptions}
          </select>
        </div>

        <div>
          <input type="submit" value="Add Card" className="new-card-form__form-button" />
        </div>
      </form>
    </div>
  );
}

NewCardForm.propTypes = {
  addCard: PropTypes.func.isRequired
}

export default NewCardForm;