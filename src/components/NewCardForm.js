import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = () => {

    const generateEmojiList = () => {
        let emojiArray = [];
        
        for (const emojiOption of EMOJI_LIST)
            if (emojiOption === "") {
                emojiArray.push(<option>No Emoji</option>)
            }
            else {
                emojiArray.push(<option>{emoji.getUnicode(`${emojiOption}`)}</option>)
            }; 
        return emojiArray;
    }; 

    return (
        <div className="new-card-form">
        <h3 className="new-card-form__header">New Card Form</h3>

        <form className="new-card-form__form" onSubmit="">

            <div className="new-card-form__form-label">
                <input
                    // name={field.key}
                    placeholder='Inspirational text...'
                    value=''
                    // value={formFields[field.key] || ''}
                    // onChange={onInputChange}
                    className='new-card-form__form-textarea'
                    type="text-area" 
                />
                <select className="new-card-form__form-select">
                    <option selected="">Select Emoji...</option>
                    {generateEmojiList()}
                </select>
            </div>

            <div className="new-card-form__form-button">
            <input type="submit" value="Add Card" className="new-card-form__form-button" />
            </div>
        </form>
        </div>
    );
}

export default NewCardForm;