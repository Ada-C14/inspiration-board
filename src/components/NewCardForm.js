import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {

  const [formFields, setFormFields] = useState({
    text: '',
    emoji: ''
  });

  const onInputChange = (event) => {
    const newFormFields = {
      ...formFields,
    };
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields)
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addCardCallback(formFields);

    setFormFields({
      text: '',
      emoji: ''
    });

  }

  return (
    <form 
      className='new-card-form'
      onSubmit={onFormSubmit}
    >
      <p className='new-card-form__header'>New Card Form:</p>
      <div>
        <label htmlFor="text">Text: </label>
        <input 
          name="text"
          onChange={onInputChange}
          value={formFields.text}
          className="new-card-form__form-textarea"
        />
      </div>
      <div>
        <label htmlFor="emoji">Emoji: </label>
        <input 
          name="emoji"
          onChange={onInputChange}
          value={formFields.emoji}
          className="new-card-form__form-textarea"
        />
      </div>
      
      <input
      type="submit"
      value="Add Card"
      />
    </form>
  )

}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func
};

export default NewCardForm;
