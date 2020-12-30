import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm =(props) => {

  const emojiDropdown = () => {
    const emojiList = EMOJI_LIST.map((emoji, index)=>{
      return  (<option key={index} value={emoji}>{emoji}</option>);
    });
    return emojiList;
  };


  return(

    <form className="NewCardForm" onSubmit={props.onSubmitCard}>
    <label>Card Text:</label>
     <input name = "text" type="text" onChange={props.onChangeCard}/>
    <label>Emoji Input:</label>
     <select  name="emoji" onChange={props.onChangeCard}>
      {emojiDropdown()}
    </select>
    <input
        type="submit"
        value="Submit Card"
      />
    </form>
  );
};

export default NewCardForm;