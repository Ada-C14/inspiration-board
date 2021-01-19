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

    const emojiList = EMOJI_LIST.map((em, i) => {
        return <option key={i} value={em}>{emoji.getUnicode(em)}</option>
    });

    const onInputChange = (event) => {
        const newFormFields = {
            ...formFields
        };

        newFormFields[event.target.name] = event.target.value;
        setFormFields(newFormFields);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.onAddCallBack(formFields);

        setFormFields({
            text: '',
            emoji: '',
        });
    };

    return(
        <div className="new-card-form" >
            <h3 className="new-card-form__header">Add a Card</h3>
            <form className="new-card-form__form" onSubmit={onFormSubmit}>
                <label className="new-card-form__form-label" htmlFor="text">Note</label>
                <textarea className="new-card-form__form-textarea"
                    onChange={onInputChange}
                    name="text"
                    value={formFields.text}
                />
                <label className="new-card-form__form-label" htmlFor="emoji">Emoji</label>
                <select className="new-card-from__form-select"
                    onChange={onInputChange}
                    value={formFields.emoji}
                    name="emoji" >
                    {emojiList}    
                </select>
                <input type="submit" value="Add Card" className="new-card-form__form-button" />
            </form>
        </div>
    )

}

NewCardForm.propTypes = {
    onAddCallBack: PropTypes.func.isRequired
}

export default NewCardForm;