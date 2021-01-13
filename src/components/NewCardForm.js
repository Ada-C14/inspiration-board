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
    <div className="new-card-form">
      <h2 className="new-card-form__header">Inspire Someone!</h2>

      <form className="new-card-form__form" onSubmit={onFormSubmit}>
        <label className="new-card-form__form-label" htmlFor="text">Message</label>
        <textarea className="new-card-form__form-textarea" onChange={onInputChange} name="text" value={cardFormFields.text} placeholder="Enter inspirational message here..." rows="4" cols="50" />

          <label className="new-card-form__form-label" htmlFor="emoji">Emoji</label>
          <div className="new-card-form__form-select">
            {EMOJI_LIST.map( (emoji, i) => (
                      emoji ? <button className="new-card-form__form-button" key={i} onClick={onInputChange} name="emoji" value={emoji}>{emojiName.getUnicode(emoji)}</button> : null
                    ))}
          </div>
        <input type="submit" value="Add Card" className="new-card-form__form-button" />
      </form>
    </div>

  )
}

NewCardForm.propTypes = {
  onSubmitCardCallback: PropTypes.func.isRequired
}

export default NewCardForm