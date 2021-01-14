import React, { useState, Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = [" ", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {

  const emojiList = []
    
  EMOJI_LIST.map(singleEmoji => 
    emojiList.push(<option value={singleEmoji}> {emoji.getUnicode(`${singleEmoji}`)} </option>)
  )
  
  const [formFields, setFormFields] = useState({
    text: '',
    emoji: '',
  });

  const onFormChange = (event) => {
    const {name, value} = event.target

    const newFields = {
      ...formFields
    }

    newFields[name] = value
    setFormFields(newFields)
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.onAddCard(formFields)

    setFormFields({
      text: '',
      emoji: '',
    })
  }

  return (
    <form className='new-card-form' onSubmit={onFormSubmit}>
      <p className='new-card-form__header'>Submit a Card to the Current Board!</p>
      <div className='new-card-form__form'>
        <label className='new-card-form__form-label'>
          Text:
          <textarea 
            value={formFields.text} 
            name='text' 
            onChange={onFormChange} 
            className='new-card-form__form-textarea'
          />
        </label>
      </div>

      <div className='new-card-form__form'>
        <label className='new-card-form__form-label'>
          Emoji
          <select value={formFields.emoji} name='emoji' onChange={onFormChange} className='new-card-form__form-select' >
            {emojiList}
          </select>
        </label>
      </div>
      <input
        type="submit"
        value="Add Card"
        className='new-card-form__form-button'
      />
    </form>

  )
}

NewCardForm.propTypes = {
  onAddCard: PropTypes.func.isRequired
}

export default NewCardForm;