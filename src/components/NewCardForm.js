import React, { useState, Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {
const [formFields, setFormFields] = useState({
    text: '',
    emoji: '',
});

// event handlers
const onInputChange = (event) => {
    const newFormFields = {
    ...formFields,
    }
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
}

const onFormSubmit = (event) => {
    event.preventDefault();

    props.addCardCallback(formFields);

    setFormFields({
    text: '',
    emoji: '',
    });
};

const dropDownEmojis = EMOJI_LIST.map((singleEmoji) => <option value={singleEmoji}>{emoji.getUnicode(singleEmoji)}</option>)

return (
    <form
    onSubmit={onFormSubmit}
    >
    <div>
        <label htmlFor="text">Text:</label>
        <textarea className="new-card-form__form-textarea"
            name="text"
            onChange={onInputChange}
            value={formFields.text}
        />
    </div>
    <div>
        <label className="new-card-form__form-label" htmlFor="emoji">Emoji:</label>
        <select className="new-card-form__form-select"
            name="emoji"
            onChange={onInputChange}
            value={formFields.emoji}
            >
            {dropDownEmojis}
        </select>
    </div>
    <button className="new-card-form__form-button" 
        type="submit"
        >Add Card
    </button>
    </form>
);
}

NewCardForm.propTypes = {
    addCardCallback: PropTypes.func.isRequired
    };
    

export default NewCardForm;