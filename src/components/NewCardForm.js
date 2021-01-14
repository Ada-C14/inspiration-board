import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {
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

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addNewCard(formFields);

    setFormFields({
      text: '',
      emoji: '',
    });
  };

  const emojiOptions = EMOJI_LIST.map((em, i) => {
    return (
      <option key={i} value={em}>{emoji.getUnicode(em)}</option>
    );
  });

  return (
    <div className='new-card-form'>
      <h2 className='new-card-form__header'>New Note</h2>
      <form onSubmit={onFormSubmit} className='new-card-form__form'>
        <label htmlFor="text" className='new-card-form__form-label'>Note</label>
        <textarea
          name='text'
          onChange={onInputChange}
          value={formFields.text}
          className="new-card-form__form-textarea"
        />
        <label htmlFor="text" className='new-card-form__form-label'>Emoji</label>
        <select name='emoji' value={formFields.emoji} onChange={onInputChange} className='new-card-form__form-select'>
          {emojiOptions}
        </select>
        <button type="submit"className='new-card-form__form-button'>Add Note</button>
      </form>

    </div>
  )
}

NewCardForm.propTypes = {
  addNewCard: PropTypes.func.isRequired
};

export default NewCardForm