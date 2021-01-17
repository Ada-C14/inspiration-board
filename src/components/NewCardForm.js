import React, { useState, Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {

    const [formFields, setFormFields] = useState({
        text: '',
        emoji: ''
    });


    // function that handles the changes
    const onFormChange = (event) => {
        const  {name, value} = event.target

        const newFields = {
            ...formFields
        }
        newFields[name] = value
        setFormFields(newFields)
    }

    // pass the form fields to the Board
    const onSubmit = (event) => {
        event.preventDefault();

        props.onAddCard(formFields)

        setFormFields({
            text: '',
            emoji: ''
        })

    }

    const emojiMenu = EMOJI_LIST.map((emojiName) => {
        return (
            <option value={emojiName}>
                {emoji.getUnicode(emojiName)}
            </option>
        )
    })

    return (
        <form className='new-card-form' onSubmit={onSubmit}>
            <p className='new-card-form__header'>Add a Card!</p>
            <div className='new-card-form__form'>
                <label className='new-card-form__form-label'>
                    Text:
                    <textarea
                        value={formFields.text}
                        name='text'
                        onChange={onFormChange}
                        className='new-card-form__form-textarea'
                    />
                </label>
            </div>

            <div className='new-card-form__form'>
                <label className='new-card-form__form-label '>Emoji</label>
                <select value={formFields.emoji} name='emoji' onChange={onFormChange} className='new-card-form__form-select' >
                    {emojiMenu}
                </select>
            </div>

            <input
                type="submit"
                value="Add Card"
                className='new-card-form__form-button'
            />            
        </form>
    )
}
NewCardForm.propTypes = {
    onAddCard: PropTypes.func.isRequired
}




export default NewCardForm;
