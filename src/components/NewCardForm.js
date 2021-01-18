import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {
  const [formFields, setFormFields] = useState({
    text: '',
    emoji: '',
  });

  // event handlers
  const onInputChange = (event) => {
    const newFormFields = {
      ...formFields,
    }
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.newCardCallBack(formFields);

    setFormFields({
      text: '',
      emoji: '',
    });
  };

  return (
    <form
      className="new-card-form"
      onSubmit={onFormSubmit}
    >
      <div>
        <label htmlFor="text">Text:</label>
        <input
          id="text"
          name="text"
          onChange={onInputChange}
          value={formFields.text}
          className="text"
        />
      </div>
      <div>
        <label htmlFor="emoji">Emoji:</label>
        <input
          id="emoji"
          name="emoji"
          onChange={onInputChange}
          value={formFields.emoji}
        />
      </div>
      <input
        type="submit"
        value="Add Card"
      />
    </form>
  );
};

NewCardForm.propTypes = {
  newCardCallBack: PropTypes.func
};

export default NewCardForm;