// import React, { useState, Component } from 'react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {
    const [formFields, setFormFields] = useState({
        text: '',
        emoji: '',
    });

    const emojiOptions = EMOJI_LIST.map((em, i) => {
        return <option key={i} value={em}>{emoji.getUnicode(em)}</option>
    })

    const onFormFieldChange = (event) => {
        const fieldName = event.target.name;
        const newValue = event.target.value; 

        const newFormData = {
            ...formFields
        };

        newFormData[fieldName] = newValue;
        setFormFields(newFormData);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        props.onAddCard(formFields)

        setFormFields({
            text: '',
            emoji: '',
        })
    }

    return (
        <div className="new-card-form">
            <h3 className="new-card-form__header">Add Card</h3>
            <form className="new-card-form__form" onSubmit={onFormSubmit}>
                <label className="new-card-form__form-label" htmlFor="text">Note</label>
                <textarea className="new-card-form__form-textarea"
                    onChange={onFormFieldChange}
                    name="text"
                    value={formFields.text}
                />
                <label className="new-card-form__form-label" htmlFor="emoji">Emoji</label>
                <select className="new-card-form__form-select"
                    onChange={onFormFieldChange}
                    value={formFields.emoji}
                    name="emoji" >
                    {emojiOptions}
                </select>
                    <input type="submit" value="Add Card" className="new-card-form__form-button" />
            </form>
        </div>
    )

}

NewCardForm.propTypes = {
    onAddCard: PropTypes.func.isRequired
}

export default NewCardForm;