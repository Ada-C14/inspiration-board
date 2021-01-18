import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const NewCardForm = (props) => {
  const [inputFields, setInputFields] = useState({
    text: '',
    emoji: '',
  });

  const onInputChange = (event) => {
    const newInputFields = {
      ...inputFields,
    }
    newInputFields[event.target.name] = event.target.value;
    setInputFields(newInputFields);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addCardCallback(inputFields);

    setInputFields({
      text: '',
      emoji: '',
    });
  };
  const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]
  const emojiOptions = EMOJI_LIST.map((emojiText) => {
    return (
      <option key={emojiText} value={emojiText}>{emojiText.length > 0 ? emoji.getUnicode(emojiText): ""}</option>
    );
  });

  return (
    <div className='new-card-form'>
      <h2 className='new-card-form__header'>Add New Card</h2>
      <form onSubmit={onFormSubmit} className='new-card-form__form'>
        <label htmlFor="text" className='new-card-form__form-label'>Text</label>
        <textarea
          name='text'
          onChange={onInputChange}
          value={inputFields.text}
          className="new-card-form__form-textarea"
        />
        <label htmlFor="text" className='new-card-form__form-label'>Emoji</label>
        <select name='emoji' value={inputFields.emoji} onChange={onInputChange} className='new-card-form__form-select'>
          {emojiOptions}
        </select>
        <button type="submit"className='new-card-form__form-button'>Add Card</button>
      </form>

    </div>
  )
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired
};

export default NewCardForm
