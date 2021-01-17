import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]


const NewCardForm = (props) => {
    

    // props.onSubmitCallBack

    // const [formFields, setFormFields] = useState({
    //     text: '',
    //     emoji: ''
    // })

    return(
        <form></form>
    )
    
}

NewCardForm.propTypes = {
    onSubmitCallback: PropTypes.func
}