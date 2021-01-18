import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';


class NewCardForm extends Component {
  constructor() {
    super()
    this.state = {
      text: '',
      emoji: '',
    }
  }
  
  onChange = (event) => {
    const updateState = this.state
    this.setState(updateState[event.target.name] = event.target.value)
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addCardCallback({
      text: this.state.text,
      emoji: this.state.emoji
    })
  }

  emojiList = () => {
  const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]
  const emojis = EMOJI_LIST.map((emojiString) => {
      return <option>{emoji.getUnicode(emojiString)}</option>
  })
  return emojis
  }

  render() {
    return (
    <div>
      <h1>add a new card</h1>
      <form 
        className="new-card-form"
        onChange={this.onChange}
        addCardCallback={(event) => addCardCallback(event.target.value)}  >
        <textarea>Inspirational Quote..</textarea>
        <select>{this.emojiList()}</select>
        <button onSubmit={this.onSubmit}>Submit</button>
      </form>
    </div>
   
    )
  }
};

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired
};

export default NewCardForm;