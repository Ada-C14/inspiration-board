import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = ({ onFormSubmit }) => {
    const [cardFields, setCardFields] = useState({
        text: '',
        emoji: '',
    });

    const onInputChange = (event) => { 
        const updatedCardFields = {
            ...cardFields,
        }

        if (event.target.name === "emoji") {
            updatedCardFields["emoji"] = emoji.getName(event.target.value);
        } else {
            updatedCardFields[event.target.name] = event.target.value;
        }
        setCardFields(updatedCardFields);
    };

    const submitNewCard = () => {
        onFormSubmit(cardFields)
    };

    return (
    <form className="new-card-form" onSubmit={submitNewCard} >
        <div className="new-card-form__form">
            <label className="new-card-form__form-label">Text</label>
            <input
                className="new-card-form__form-textarea"
                name="text"
                onChange={onInputChange}
                value={cardFields.text}
            />

            <label className="new-card-form__form-label">Emoji</label>
            <input
                className="new-card-form__form-textarea"
                name="emoji"
                onChange={onInputChange}
                value={cardFields.emoji}
            />

            <input type="submit" value="share something positive!" className="new-card-form__form-button" />
        </div>
    </form>
    );
};

NewCardForm.propTypes = {
    onFormSubmit: PropTypes.func,
};

export default NewCardForm;