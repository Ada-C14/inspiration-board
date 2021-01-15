import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {
  const initState = {
    text: '',
    emoji: ''
  };

  const [card, setCard] = useState(initState);

  const onInputChange = (event) => {
    const newCard = {
      ...card,
    };

    newCard[event.target.name] = [event.target.value]
    setCard(newCard);
  }


  const onFormSubmit = (event) => {
    event.preventDefault();

    props.sendSubmission(card);

    setCard(initState);
  }

  return (
    <div className="new-card-form">
      <h3>Card Submission Form</h3>

      <form 
      className="new-card-form__form"
      onSubmit={onFormSubmit}>

        <div className="new-card-form__header">

          <input
            name='text'
            placeholder='text'
            value={card.text}
            type='text'
            onChange={onInputChange}
            className={card.text === '' ? 'blankInput' : 'typedInput'} />
        </div>

        <div className="NewCardForm__submit">
          <input 
          type="submit" 
          value="Submit Line" 
          className="new-card-form__form-button" />
        </div>
      </form>
    </div>
  );
}

NewCardForm.propTypes = {
}

export default NewCardForm;
