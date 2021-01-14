import React, { useState, Component } from 'react';
import PropTypes from 'prop-types';
import emojis from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]


const NewCardForm = (props) => {

  const [formFields, setFormFields] = useState({
    text: '',
    emoji: '',
  });

  const showEmojis = EMOJI_LIST.map((emoji, i) => {
    return (
    <option key={i} 
      value={emoji}>
      {emojis.getUnicode(emoji)}
    </option>
    );
    });

  const onInputChange = (event) => {
    const newFormFields = {
      ...formFields
    };

    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.onAddCallBack(formFields);

    setFormFields({
      text: '',
      emoji: '',
    });
    };

  return(
    <form className="new-card-form__form" onSubmit={onFormSubmit}>
      <h3 className="new-card-form__header">Add a card!</h3>
      <label className="new-card-form__form-label" htmlFor="text">Message:</label>
      <textarea className="new-card-form__form-textarea" 
        onChange={onInputChange} 
        name="text" 
        value={formFields.text} 
        placeholder="Enter your message"/>

      <label className="new-card-form__form-label" htmlFor="emoji">Emoji</label>
      <select className='new-card-form__form-select'
        value={formFields.emoji} 
        name='emoji' 
        onChange={onInputChange}>
        {showEmojis}
      </select>      
      <input className="new-card-form__form-submit" type="submit" value="Add Card"/>
    </form>
  )
}

NewCardForm.propTypes = {
  onAddCallBack: PropTypes.func.isRequired
}

export default NewCardForm;
