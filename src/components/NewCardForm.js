import React, {  useEffect, useState, Component } from 'react';
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
    props.addCard(formFields)
    setFormFields({
      text: '',
      emoji: '',
    })
  }

  return (
    <div className = "new-card-form">
      <header className = "new-card-form__header">New Card</header>

      <form className="new-card-form__form" onSubmit = {onFormSubmit} >

      <div>
        <label className = 'new-card-form__form-label'>Text</label>
        <input
          id="text"
          name="text"
          onChange={onInputChange}
          value={formFields.text}
          className="new-card-form__form-textarea"
        />
        <label className = 'new-card-form__form-label'>Emoji</label>
        <input
          id="emoji"
          name="emoji"
          onChange={onInputChange}
          value={formFields.emoji}
          className="new-card-form__form-textarea"
        />
      </div>

        <input type="submit" value="Submit Line" className="new-card-form__form-button"/>

      </form>
    </div>
  )
}
NewCardForm.propTypes = {
  addCard: PropTypes.func.isRequired,
};
export default NewCardForm;