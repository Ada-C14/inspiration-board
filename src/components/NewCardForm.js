import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]


const NewCardForm = (props) => {
    const [formFields, setFormFields] = useState({
        id: -1,
        text: '',
        emoji: ''
    })

    const onInputChange = (event) => {
        const newFormFields = {...formFields, id: props.newId, [event.target.name]: event.target.value}
        setFormFields(newFormFields);
    }

    return (
        <div className='new-card-form'>
            <h3 className='new-card-form__header'>Add a new card to your board!</h3>
            <form className='new-card-form__form'>
                <input
                    className='new-card-form__form-textarea'
                    placeholder= 'Enter a quote'
                    name='text'
                    type='text'
                    value={formFields.text}
                    onChange={onInputChange} 
                />
                <select name='selectedEmoji' onChange={onInputChange} id='selectedEmoji'>
                    {
                        EMOJI_LIST.map((selectedEmoji, i) => {
                            return (
                                <option value={selectedEmoji} key={selectedEmoji.concat(i)}>{emoji.getUnicode(selectedEmoji)}</option>
                            )
                        })
                    }
                </select>
                <input className='new-card-form__form-button' value='Add inspirational quote' onClick={(event) => {props.addNewCard(event, formFields)}} type='submit' />
            </form>
        </div>
    )
}

NewCardForm.propTypes = {
    newId: PropTypes.number.isRequired,
    addNewCard: PropTypes.func.isRequired,
}

export default NewCardForm;