import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const newCardForm = (props) => {
    const [formFields,setFormFields] = useState ({
        text: '',
        emoji; ''
    });

    // event handler
    const onInputChange = (event) => {
        const newFormFields = {
            ...formFields,
        }
        newFormFields[event.target.name] = event.target.value;
        setFormFields(newFormFields);
    }
    const onFormSubmit = (event) => {
        event.preventDefault();

        props.addNewCardCallback(formFields);

        setFormFields({
            text: '',
            emoji: '',
        });
    };


    return (
        <div className='new-card-form'>
            <h2 className='new-card-form__header'>New Note</h2>
            <form onSubmit={onFormSubmit} className='new-card-form__form'>
            <label htmlFor="text" className='new-card-form_form__form-label'>Note</label>
            <input 
                name='text'
                onChange={onInputChange}
                value={formFields.text}
                className='new-card-form__form-textarea'
                />

        </div>
    );



};

NewCardForm.propTypes = {
  addNewCard: PropTypes.func.isRequired
};

export default NewCardForm