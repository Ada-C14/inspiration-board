import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emojiName from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = ({onSubmitCardCallback}) => {
  const emptyFields = {
    id: null,
    text: "",
    emoji: ""
  }

  const [cardFormFields, setCardFormFields] = useState(emptyFields)

  const onInputChange = event => {
    event.preventDefault();

    const { name, value } = event.target
    
    const newFormFields = {
      ...cardFormFields
    }
    newFormFields[name] = value
    setCardFormFields(newFormFields)
  }

  const onFormSubmit = event => {
    event.preventDefault();

    onSubmitCardCallback(cardFormFields)
    setCardFormFields(emptyFields)
  }
  

  return(
      <form onSubmit={onFormSubmit}>
        <label htmlFor="text">Message</label>
        <textarea onChange={onInputChange} name="text" value={cardFormFields.text} placeholder="Enter inspirational message here..." rows="4" cols="50" />
        <div>
        {EMOJI_LIST.map( (emoji, i) => (
                  emoji? <button key={i} onClick={onInputChange} name="emoji" value={emoji}>{emojiName.getUnicode(emoji)}</button> : null
                ))}
        </div>
        <input type="submit" value="Add Card"/>
      </form>
  )
}

NewCardForm.propTypes = {
  onSubmitCardCallback: PropTypes.func.isRequired
}

export default NewCardForm