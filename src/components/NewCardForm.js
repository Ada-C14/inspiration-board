import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {
    const [formFields, setFormFields] = useState({
        text: null,
        emoji: null,
    });

    const onTextChange = (event) => {
        const newFormFields = {...formFields,};
        newFormFields[event.target.name] = event.target.value;
        setFormFields(newFormFields);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.addCardCallback(formFields);

        setFormFields({
            text: "",
            emoji: "",
        });
    };

    const emojiChoiceMenu = EMOJI_LIST.map((emojiName) => {
        return (
            <option value={emojiName} >
                {emoji.getUnicode(emojiName)}
            </option>
        )
    })

    return (
        <form className='new-card-form' onSubmit={onFormSubmit} >
            <header className='new-card-form__header'>New Card</header>
            <div className='new-card-form__form'>
                <label className='new-card-form__form-label'>Text</label>
                <input className='new-card-form__form-textarea'
                        id='text'
                        name='text'
                        onChange={onTextChange}
                        value={formFields.text}/>
            </div>

            <div className='new-card-form__form'>
                <label className='new-card-form__form-label'>Emoji</label>
                <select className='new-card-form__form-select'
                        id='emoji'
                        name='emoji'
                        onChange={onTextChange}
                        value={formFields.emoji} >
                    {emojiChoiceMenu}
                </select>
            </div>
            <input type='submit' value='Add New Card' className='new-card-form__form-button' />
        </form>
    )
};

export default NewCardForm; 