import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]


const NewCardForm = (props) => {

    const [formFields, setFormFields] = useState({
        card: {
            text: '',
            emoji: ''
        }
    })

    const onInputChange = (event) => {
        const newFormFields = {...formFields}
        newFormFields[event.target.name] = event.target.value
        setFormFields(newFormFields)
    }

    const onFormSubmit = (event) => {
        event.preventDefault()
        props.addCardCallback(formFields)
        setFormFields({
            card: {
                text: '',
                emoji: ''
            }
        })
    }


    return(
        <div className="new-card-form">
            <h3 className="new-card-form__header">Add A New Card</h3>
            <form className="new-card-form__form">
                <div>
                    <label htmlFor="text" className="new-card-form__form-label">Text: </label>
                    <input
                        id="text"
                        name="text"
                        onChange={onInputChange}
                        value={formFields.text} 
                        className="new-card-form__form-textarea" />
                </div>
                <br/>
                <div>
                    <label htmlFor="emoji" className="new-card-form__form-label">Emoji: </label>
                    <input
                        id="emoji"
                        name="emoji"
                        onChange={onInputChange} 
                        value={formFields.emoji}
                        className="new-card-form__form-textarea" />
                </div>
                <br/>
                <div>
                    <input
                        type="submit"
                        value="Add Card"
                        onClick={onFormSubmit}
                        className="new-card-form__form-button" />
                </div>
            </form>
        </div>
    )
    
}

NewCardForm.propTypes = {
    onSubmitCallback: PropTypes.func
}

export default NewCardForm