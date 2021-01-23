import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {
    const [formFields, setFormFields] = useState({
        text: '',
        emoji: '',
    })

    // emoji.getUnicode(props.emoji)
    const onWordChange = (event) => {
        const key = event.target.name;
        console.log(key)
        const value = event.target.value;
        console.log(value)
        const newFormFields = {
          ...formFields,
        }
        newFormFields[key] = value;
        setFormFields(newFormFields);
      }
    
      const onSubmit = (event) => {
        event.preventDefault();
        
        props.addCard(formFields);

        // clearing out after submission
        setFormFields({
          text: '',
          emoji: '',
        })
    }

    return (
        <div>
            <form className="new-card-form__form" onSubmit={onSubmit}>
                <input
                placeholder="Inspiration Message"
                type="text" 
                name="text"
                onChange={onWordChange}
                value={formFields.text}/>
                <select
                type="text"
                name="emoji"
                onChange={onWordChange}
                value={formFields.emoji}>
                    {EMOJI_LIST.map(text =>
                        <option value={text}>{emoji.getUnicode(text)}</option>
                    )}

                    {/* <option value="heart_eyes">{emoji.getUnicode("heart_eyes")}</option>
                    <option value="beer">{emoji.getUnicode("beer")}</option> */}

                </select>
                <input type="submit" value="Add to the board!"/>
            </form>
      </div>
    )
}

export default NewCardForm;

//Create a NewCardForm component which will add new cards to the board and trigger POST requests to the API to create a card on the API.
