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
        const fieldText = event.target.value;
        const field
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        setFormFields({
            text: '',
            emoji: '',
        });
    };

    return (
        <div className="new-card-form" onSubmit={onFormSubmit}>
            <div className="new-card-form__header">
                <h2>Create a new post-it!</h2>
            </div>
            <form className="new-card-form__form" >
                <div className="new-card-form__form-textarea"></div>
                <div className="new-card-form__form-label">
                </div>
                <div className="new-card-form__form-select"></div>


            
                <button onClick={onFormSubmit} className="new-card-form__form-button">
            
                </button>
            </form
        </div>
    )
};

export default NewCardForm;