import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';
import Card from './Card';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {
    const [formFields, setFormFields] = useState({ 
        //tracking text and emoji in the state
        text: '',
        emoji: '',
    });

    const onInputChange = (event) => {
        const newFormFieldValues = {
            ...formFields,
        }
        const {name, value} = event.target;
        newFormFieldValues[name] = value;
        setFormFields(newFormFieldValues);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (formFields.text !== '' || formFields.emoji !== '') {
            props.onSubmitCallback(formFields);

            setFormFields({
                text: '',
                emoji: '',
            })
        } 
    }
    return (
        <form 
            id="new-card-form"
            onSubmit={onFormSubmit}
        >
        <label htmlFor="text">Text</label>
        <input name="text"
            value={formFields.text}
            type="text"
            onChange={onInputChange}
        />
        <label htmlFor="emoji">Emoji</label>
        <input name="emoji"
            value={formFields.emoji}
            type="text"
            onChange={onInputChange}
        />

        <input type="submit" 
        value="Add Card" 
        />
        </form>
    );
}
NewCardForm.propTypes = {
    onSubmitCallback: PropTypes.func.isRequired,
};

export default NewCardForm;