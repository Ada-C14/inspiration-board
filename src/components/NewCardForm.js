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

    const onInputChange = (event) => {
        console.log(`Changing field ${ event.target.name } to ${ event.target.value }`);

        if (event.target.name === `emoji`) {
            let selectedEmoji = ''
            if (event.target.value != 'No Emoji') {
                selectedEmoji = emoji.getName(event.target.value)
            };

            const newFormFields = {
                ...formFields,
            };
            
            newFormFields[event.target.name] = selectedEmoji;
            console.log(newFormFields[event.target.name]);
            setFormFields(newFormFields);
            console.log(newFormFields);
        }
        else {
            const newFormFields = {
                ...formFields,
              };
            
              newFormFields[event.target.name] = event.target.value;
              console.log(newFormFields[event.target.name]);
              setFormFields(newFormFields);
              console.log(newFormFields);
        }
    };

    const onFormSubmit = (event) => {
        // prevent the browser from trying to submit the form.
        event.preventDefault();
    
        props.onAddCard(formFields);
    
        // reset form fields
        setFormFields({
            text: '',
            emoji: '',
        });
      };  

    return (
        <div className="new-card-form">
            <h2 className="new-card-form__header">New Card Form</h2>

            <form className="new-card-form__form" onSubmit={onFormSubmit}>

                <label className="new-card-form__form-label"></label>
                    <input
                        name="text"
                        placeholder='Inspirational text...'
                        value={formFields.text || ''} 
                        onChange={onInputChange}
                        className='new-card-form__form-textarea'
                        type="text-area" 
                    />
                <label className="new-card-form__form-select"></label>
                        <select className="new-card-form__form-select" onChange={onInputChange} name="emoji" value={formFields.emoji}>
                        <option selected="">Select Emoji...</option>
                        {generateEmojiList()}
                        </select>
                <input type="submit" value="Add Card" className="new-card-form__form-button" />
            </form>
        </div>
    );
};

NewCardForm.propTypes = {
    onAddCard: PropTypes.func.isRequired
};

export default NewCardForm;