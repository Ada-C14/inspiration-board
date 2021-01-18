import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import emoji_dict from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ['', ...emoji_dict.names]

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

    newCard[event.target.name] = event.target.value
    setCard(newCard);
  }


  const onFormSubmit = (event) => {
    event.preventDefault();

    props.sendSubmission(card);

    setCard(initState);
  }

  const getEmojiNames = EMOJI_LIST.map((name) => {
    return (
      <option key={name.id}
        value={name}>
        {emoji_dict.getUnicode(name)}
      </option>);
  });

  return (
    <div className="new-card-form">
      <h1>Inspire Me, or someone, anyone, please and thank you!</h1>
      <form
        className="new-card-form__form"
        onSubmit={onFormSubmit}>
        <label
          className="new-card-form__form-label">
          Text:</label>
        <textarea
          name='text'
          placeholder='YOUR TEXT HERE AND NOW'
          value={card.text}
          type='text'
          onChange={onInputChange}
          className={card.text === '' ? 'blankInput' : 'typedInput'} />
        <label
          className="new-card-form__form-label">
          Emoji:</label>
        <select className='new-card-form__form-select'
          name='emoji'
          type='text'
          onChange={onInputChange}>
          {getEmojiNames}
        </select>
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
  sendSubmission: PropTypes.func.isRequired
}

export default NewCardForm;
