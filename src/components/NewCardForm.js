import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emojis from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {
    const [formFields,setFormFields] = useState ({
        text: '',
        emoji: ''
    });

    // event handler
    const onInputChange = (event) => {
        const newFormFields = {
            ...formFields,
        }
        newFormFields[event.target.name] = event.target.value;
        setFormFields(newFormFields);
    }
    const onFormSubmit = (event) => {
        event.preventDefault();

        props.addNewCardCallback(formFields);

        setFormFields({
            text: '',
            emoji: '',
        });
    };

    const emojiChoice = EMOJI_LIST.map((emoji, i) => {
        return (
            <option key={i} value={emoji}>{emojis.getUnicode(emoji)}</option>
        );
    })


return (
    <div className='new-card-form'>
        <h2 className='new-card-form__header'>New Note</h2>
        <form className='new-card-form__form' onSubmit={onFormSubmit}>
            <label className='new-card-form_form__form-label'htmlFor="text">Note</label>
            <textarea className='new-card-form__form-textarea'
                onChange={onInputChange}
                name='text'
                value={formFields.text}
            />
            <label htmlFor="text" className='new-card-form__form-label'>Emoji</label>
            <select className='new-card-form__form-select'
                onChange={onInputChange} 
                name= 'emoji' 
                value={formFields.emoji}>
                {emojiChoice}
        </select>
            <button type="submit" className='new-card-form__form-button'>Add Note</button>
        </form>
    </div>
);

};

NewCardForm.propTypes = {
  addNewCardCallback: PropTypes.func.isRequired
};

export default NewCardForm;