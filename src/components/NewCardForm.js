import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';
import Select from 'react-select'

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const emptyFields = {
    text: '',
    emoji: ''
}
const NewCardForm = (props) => {
    const [formFields, setFormFields] = useState(emptyFields);

    const onInputChange = (event) => {
        const newFormFields = {
            ...formFields,
        }
        newFormFields[event.target.name] = event.target.value;
        setFormFields(newFormFields);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.addCardCallback(formFields);

        setFormFields(emptyFields);
    };

    const options = EMOJI_LIST.map((symbol)=>{
        return {
            value: `${emoji.getUnicode(symbol)}`, 
            label: `${emoji.getUnicode(symbol)}`,
            target: {name: "emoji", value: symbol}
        }
    });

    return (
        <div className="new-card-form">
            <h1 class="new-card-form__header">New Card</h1>
            <form className="new-card-form__form" onSubmit={onFormSubmit}>
                <div>
                    <label className="new-card-form__form-label">Text</label>
                    <input 
                        className="new-card-form__form-textarea"
                        onChange={onInputChange}
                        name="text"
                        value={formFields.text}
                    />
                </div>
                <div>
                    <label className="new-card-form__form-label">Emoji</label>
                    <Select
                        options={options}
                        className="new-card-form__form-select"
                        onChange={onInputChange}
                        name="emoji"
                        value={formFields.emoji.value}
                    />
                </div>
                <input type="submit" value="Add Card" className="new-card-form__form-button" />
            </form>

        </div>
    )
}

export default NewCardForm;