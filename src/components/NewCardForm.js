import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardFrom = (props) => {
  const [formData, setFormData] = useState({
    text: '',
    emoji: ''
  })

  const handleFormChange = (event) => {
      const {name, value} = event.target
      setFormData({...formData, [name]: value});
  }

  const emojiOptions = EMOJI_LIST.map((emojiTxt, i) => {
      return emojiTxt ? <option value={emojiTxt} key={i}>{emoji.getUnicode(emojiTxt)}</option> : <option value={emojiTxt} key={i}>None</option>
  })
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.addCardCallback(formData);
    // reset form
    setFormData({text: '', emoji: ''})
  }

  return (
    <div className="new-card-form">
      <h1 className="new-card-form__header">
        New Card Form
      </h1>
      <form className="new-card-form__form" onSubmit={handleFormSubmit}>
        <label className="new-card-form__form-label">Text</label>
        <textarea className="new-card-form__form-textarea" value={formData.text} name='text' onChange={handleFormChange}></textarea>
        
        <label className="new-card-form__form-label">Emoji</label>
        <select className="new-card-form__form-select" value={formData.emoji} onChange={handleFormChange} name='emoji'>
          {emojiOptions}
        </select>
        
        <button className="new-card-form__form-button">Submit</button>
      </form>
    </div>
  )
}

NewCardFrom.propTypes = {
  addCardCallback: PropTypes.func.isRequired
}

export default NewCardFrom;