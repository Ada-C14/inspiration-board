import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {
const [newCard, setNewCard] = useState({
    text: '',
    emoji: ''
});

const onChange = (event) => {

    const submittedCard = { ...newCard };
    submittedCard[event.target.name] = event.target.value;
    setNewCard(submittedCard); 
};

const onSubmitForm = (event) => {
    event.preventDefault();

    props.addCardCallback(newCard); 
    setNewCard({
    text: '',
    emoji: ''
    });
};

const emojiDropDown= EMOJI_LIST.map((emoji_x, i) => {
    return (
    <option 
    key={i} 
    value={emoji_x}
    >{emoji.getUnicode(emoji_x)} {emoji_x}
    </option>
    );
});

return (
    <div className='new-card__form'>
    <h2 className='new-card-form__header'> ADD NEW CARD </h2>
        <form className='new-card-form--form' onSubmit={onSubmitForm}>
            <div>
                <label className='new-card-form__form-label' htmlFor='text'></label>
                <textarea
                    className='new-card-form__form-textarea'
                    name='text'
                    placeholder="Enter Text Here..."
                    value={newCard.text}
                    onChange={onChange}
                />
            </div>
            <div>
            <label className='new-card-form__form-label'  htmlFor='emoji'></label>
                <select
                    className='new-card-form__form-select'
                    name='emoji'
                    value={newCard.emoji}
                    onChange={onChange}
                    >
                    {emojiDropDown}
                </select>
            </div>
            <input
                className='new-card-form__form-button'
                type='submit'
                value='SUBMIT'
            />
        </form>
    </div>
);
};

NewCardForm.propTypes = {
    addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;