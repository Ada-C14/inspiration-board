import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = () => {
  const [formFields, setFormFields] = useState({
    text: '',
    emoji: '',
  });

  const onInputChange = (event) => {
    const newFormFields = {
      ...formFields,
    }
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  }

  const emojiOptions = EMOJI_LIST.map((emoji) => {
    return (
      <option value={emoji}>{emoji}</option>
    );
  });

  return (
    <div className='new-card-form'>
      <h2 className='new-card-form__header'>New Note</h2>
      <form className='new-card-form__form'>
        <div>
          <label htmlFor="text" className='new-card-form__form-label'>Text</label>
          <textarea
            name='text'
            onChange={onInputChange}
            value={formFields.text}
            className="new-card-form__form-textarea"
          />
        </div>
        <div>
          <label htmlFor="text" className='new-card-form__form-label'>Emoji</label>
          <select name='emoji' value={formFields.emoji} onChange={onInputChange} className='new-card-form__form-select'>
            {emojiOptions}
          </select>
        </div>
      </form>

    </div>
  )

}

export default NewCardForm