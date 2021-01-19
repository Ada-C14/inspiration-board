import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import emoji from 'emoji-dictionary';
import './NewCardForm.css';
import './Card.css';

// Using smaller list of emojis b/c full list using emoji.names does not allow for successful post request
const EMOJI_LIST = [
  "", 
  "heart_eyes", 
  "beer", 
  "clap", 
  "sparkling_heart", 
  "heart_eyes_cat", 
  "dog"
]

const NewCardForm = props => {
  const [formFields, setFormFields] = useState({
    text: '',
    emoji: ''
  });
  
  const [targetBoard, setTargetBoard] = useState(props.currentBoard);

  useEffect(() => {
    setTargetBoard(props.currentBoard)
  }, [props]);

  const onInputChange = event => {
    const newFormFields = { ...formFields }
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  };

  const onTargetBoardChange = event => {
    setTargetBoard(event.target.value);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    props.addCardCallback(formFields, targetBoard);
    setFormFields({
      text: '',
      emoji: ''
    });
    setTargetBoard(props.currentBoard);
  };

  return (
    <div>
      <span>Add a msg using the sticky below!</span>
      <div className='new-card-form new-card-form__bg-color'>
        <div className='card__content'>
          <form onSubmit={onFormSubmit} className='new-card-form__bg-color'>
            <textarea name='text' onChange={onInputChange} value={formFields.text} placeholder='Write your message here' />
            
            <select name='emoji' onChange={onInputChange} value={formFields.emoji}>
              <option value='' disabled selected>Emoji Selection</option>
              { EMOJI_LIST.map((emoji, index) => <option key={index}>{emoji}</option>) }
              {/* { emoji.names.map((emoji, index) => <option key={index}>{emoji}</option>) } */}
            </select>

            <label htmlFor='boards' className='new-card-form__bg-color'>Destination board:</label>
            <select name='boards' onChange={onTargetBoardChange} value={targetBoard}>
              <option value='' disabled selected>{ targetBoard }</option>
              { props.studentBoards.map((studentBoard, index) => <option key={index}>{studentBoard}</option>) }
            </select>

            <input type='submit' value='Add Inspo!' className='new-card-form__form-button' />
          </form>
        </div>
      </div>
    </div>
  );
};

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
  currentBoard: PropTypes.string.isRequired,
  studentBoards: PropTypes.array.isRequired
};

export default NewCardForm;