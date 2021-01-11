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
    setFormFields({...formFields, id: props.nextId, [event.target.name]: event.target.value});
    console.log(formFields)
  }

  return(
    <div className='new-card-form'>
      <h3>Add a new Sticky to the Board</h3>
      <form className='new-card-form__form' onClick={(event) => {props.addNewCard(event, formFields)}} type='submit' >
        <div className='new-card-form__data-div'>
          {/* <label className='.new-card-form__form-label'>Message</label> */}
          <input 
            className='.new-card-form__form-textarea' 
            placeholder='Enter an inspiring message...' 
            name='text' 
            type='text' 
            value={formFields.text}
            onChange={onInputChange} />
        </div>
      </form>
      <button className='new-card-form__form-button'  >Add Sticky</button>
    </div>
  )
}

NewCardForm.propTypes = {
 nextId: PropTypes.number.isRequired,
 addNewCardCallback: PropTypes.func.isRequired,
}

export default NewCardForm;
