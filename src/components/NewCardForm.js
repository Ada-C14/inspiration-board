import React, { Component , useState} from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = emoji.names.concat(['']);
const EMOJI_LIST_SORTED = EMOJI_LIST.sort();
console.log(EMOJI_LIST_SORTED);

const NewCardForm = (props) => {
  const emojiOptions = EMOJI_LIST_SORTED.map((item, i) => {
    return(
      <option key={i} value={item}>{item} - {emoji.getUnicode(item)}</option> 
    )
  });

  const [formFields, setFormFields] = useState({
    text: "",
    emoji: "",
  });

  const onInputChange = (event) => {
    const newFormFields = {
      ...formFields,
    }
  
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (formFields.text != '') {
      props.onAddCallback(formFields);

      setFormFields({
        text: '',
        emoji: '',
      });
    }
  };

  return (
    <div className="new-card-form">
      <h2 className="new-card-form__header">
        Add a thought to the board...
      </h2>
      <form className="new-card-form__form" onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="text" className="new-card-form__form-label">Text (required):</label>
        <input name="text" className="new-card-form__form-textarea" value={formFields.text} onChange={onInputChange}/>
      </div>
      <div>
        <label htmlFor="emoji" className="new-card-form__form-label">Emoji:</label>
        <select name="emoji" value={formFields.emoji} className="new-card-form__form-select" onChange={onInputChange}>
          {emojiOptions}
        </select>
      </div>
      <input type="submit" value="Add It!" className="new-card-form__form-button" />
    </form>
    </div>
  );
};

NewCardForm.propTypes = {
  onAddCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
