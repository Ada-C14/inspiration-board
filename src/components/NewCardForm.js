import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {

    const [formFields, setFormFields] = useState({
        text: '',
        emoji: ''
    });

    const onInputChange = (event) => {
        const newFormFields = {
            ...formFields,
        };
        newFormFields[event.target.name] = event.target.value;
        setFormFields(newFormFields)
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.addCardCallback(formFields);

        setFormFields({
        text: '',
        emoji: ''
        });
    };

    const emojiOptions = EMOJI_LIST.map((emoj, i) => {
        return <option key={i} value={emoj}>{emoji.getUnicode(emoj)}</option>
    })

    return (
        <form className='new-card-form' onSubmit={onFormSubmit} >
        <h3 className='new-card-form__header'>New Card Form:</h3>
            <div>
                <label htmlFor="text">Text: </label>
                <input 
                    name="text"
                    onChange={onInputChange}
                    value={formFields.text}
                    className="new-card-form__form-textarea"
                />
            </div>
            <div>
                <label htmlFor="emoji">Emoji: </label>
                <select className="new-card-form__form-select"
                    onChange={onInputChange}
                    value={formFields.emoji}
                    name="emoji" >
                    {emojiOptions}
                </select>
            </div>
        
            <input
                type="submit"
                value="Add Card"
                className="new-card-form__form-button"
            />
        </form>
    )
}

NewCardForm.propTypes = {
    addCardCallback: PropTypes.func
};
    

export default NewCardForm