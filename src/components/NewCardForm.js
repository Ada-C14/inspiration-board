import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = () => {
    const [formFields, setFormFields] = useState({
        text: '',
        emoji: '',
    })

    return (
        <form className='new-card-form'>
            <div>
                <label htmlFor='text'>text:</label>
                <input text='text' />
            </div>
            <div>
                <label htmlFor='emoji'>emoji:</label>
                <input emoji='emoji'/>
            </div>
            <input
                type='submit'
                value='Add Card'
            />
        </form>
    )
}

export default NewCardForm;