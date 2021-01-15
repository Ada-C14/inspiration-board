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
      <h1>Inspire Me, or someone, anyone, please and thank you!</h1>
      <form 
      className="new-card-form__form"
      onSubmit={onFormSubmit}>
        <label 
        className="new-card-form__form-label">
        Text:</label>
          <input
            name='text'
            placeholder='YOUR TEXT HERE AND NOW'
            value={card.text}
            type='text'
            onChange={onInputChange}
            className={card.text === '' ? 'blankInput' : 'typedInput'} />
        <label
        className="new-card-form__form-label">
        Emoji:</label>
        <input
          name='emoji'
          placeholder='👀'
          value={card.emoji}
          // why doesn't this work? value={emoji.getUnicode(card.emoji)}
          type='text'
          onChange={onInputChange}/>

        <div className="NewCardForm__submit">
          <input 
          type="submit" 
          value="Add Inspo" 
          className="new-card-form__form-button" />
        </div>
      </form>
    </div>
  );
}

NewCardForm.propTypes = {
}

export default NewCardForm;
