import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emojis from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = ({onAddCardCallback}) => {
    const [formFields, setFormFields] = useState({
        text: '',
        emoji: '',
    });
    // console.log(formFields)

    const getEmoji = EMOJI_LIST.map((emoji, i) => {
        return (
            <option
                key={i}
                value={emoji}
            >
                {emojis.getUnicode(emoji)}
            </option>
        )
    })

    const onFieldChange = (event) => {
        const newFormFields = {
            ...formFields,
        };

        newFormFields[event.target.name] = event.target.value;
        console.log(event.target)
        setFormFields(newFormFields);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        onAddCardCallback(formFields);

        setFormFields({
            text: '',
            emoji: '',
        });
    };

    return (
        <form 
            className='new-card-form__form'
            onSubmit={onFormSubmit}
        >
        <h3 className='new-card-form__header'>Add a Card!</h3>
        <label className='new-card-form__form-label' htmlFor="text">Enter message:</label>
        <textarea className='new-card-form__form-textarea'
            onChange={onFieldChange}
            name='text'
            value={formFields.text}
        />
        <label className='new-card-form__form-label' htmlFor="emoji">emoji:</label>
        <select className='new-card-form__form-emoji'
            name='emoji'
            onChange={onFieldChange}
            value={formFields.emoji}>
            {getEmoji}
        </select>
        <input className='new-card-form__form-button'
            type='submit'
            value='Add Card'
        />
        </form>
    );
}

NewCardForm.propTypes = {
    onAddCardCallback: PropTypes.func.isRequired,
}

export default NewCardForm;