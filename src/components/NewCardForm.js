import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = [
  "", 
  "heart_eyes", 
  "beer", 
  "clap", 
  "sparkling_heart", 
  "heart_eyes_cat", 
  "dog"
]

const NewCardForm = (props) => {
  const [formFields, setFormFields] = useState({
    text: '',
    emoji: ''
  });

  const onInputChange = (event) => {
    const newFormFields = { ...formFields }
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.addCardCallback(formFields);
    setFormFields({
      text: '',
      emoji: ''
    });
  };

  return (
    <div className='new-card-form'>
      <h3 className='new-card-form__header'>Add your own inspo to the board!</h3>
      <form className='new-card-form__form' onSubmit={onFormSubmit}>
        <label htmlFor='text' className='new-card-form__form-label'>Message</label>
        <input name='text' onChange={onInputChange} value={formFields.text} className='new-card-form__form-textarea' />
        
        <label htmlFor='emoji' className='new-card-form__form-label'>Emoji</label>
        <input name='emoji' onChange={onInputChange} value={formFields.emoji} className='new-card-form__form-textarea' />

        <input type='submit' value='Add Inspo!' className='new-card-form__form-button' />
      </form>
    </div>
  );
};

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired
};

export default NewCardForm;