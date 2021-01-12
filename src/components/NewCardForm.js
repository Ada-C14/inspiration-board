import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {
  const [formFields, setFormFields] = useState({
    id: -1,
    text: '',
    emojiName: '',
  })

  const onInputChange = (event) => {
    const newFormFields = {...formFields, id: props.nextId, [event.target.name]: event.target.value} 
    setFormFields(newFormFields);

    console.log(newFormFields);
  }

  return(
    <div className='new-card-form'>
      <h3 className='new-card-form__header'>Add a new sticky note to the Inspiration Board</h3>
      <form className='new-card-form__form'>
        <input 
          className='new-card-form__form-textarea' 
          placeholder='Enter an inspiring message...' 
          name='text' 
          type='text' 
          value={formFields.text}
          onChange={onInputChange} />
        
        <select name='emojiName' onChange={onInputChange} id='emoji'>
          {
            EMOJI_LIST.map((emojiSelection) => {
              return (
                <option value={emojiSelection} >{emoji.getUnicode(emojiSelection)}</option>
              )
            })
          }

        </select>
        <input className='new-card-form__form-button' value='Add Sticky' onClick={(event) => {props.addNewCard(event, formFields)}} type='submit' />

      </form>
    </div>
  )
}

NewCardForm.propTypes = {
 nextId: PropTypes.number.isRequired,
 addNewCardCallback: PropTypes.func.isRequired,
}

export default NewCardForm;
