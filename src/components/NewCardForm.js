import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]


const NewCardForm = (props) => {
    const [formFields, setFormFields] = useState({
        text: '',
        emoji: '',
    });

    const onFormFieldChange = (event) => {
        const newFormFields = {...formFields, };
        newFormFields[event.target.name] = event.target.value;
        setFormFields(newFormFields);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();


        setFormFields({
            text: '',
            emoji: '',
        });
    };

    const selectEmoji = EMOJI_LIST.map((emojiText) => {
        return (
            <option value={emojiText}>
                {emoji.getUnicode(emojiText)}
            </option>
        )
    })

    return (
        <form className="new-card-form" onSubmit={onFormSubmit}>
            <div className="new-card-form__header">
                <h2>Create a new post-it!</h2>
            </div>
            <div className="new-card-form__form" >
                <label className="new-card-form__form-label">Message</label>
                <input className="new-card-form__form-textarea"
                            id='text'
                            name='text'
                            onChange={onFormFieldChange}
                            value={formFields.text}
                />
            </div>
            <div className='new-card-form__form'>
                <label className='new-card-form__form-label'>Emoji</label>
                <select className='new-card-form__form-select'
                            id='emoji'
                            name='emoji'
                            onChange={onFormFieldChange}
                            value={formFields.emoji}
                            >
                                {selectEmoji}
                </select>
            </div>
            <input type='submit' value='Add a New Card' className="new-card-form__form-button" />
        </form>
    )
};

NewCardForm.propTypes = {
    onAddCardCallback: PropTypes.func.isRequired,
}

export default NewCardForm;