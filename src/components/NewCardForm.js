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
    const name = event.target.name
    const value = event.target.value
    updateState[name] = value
    this.setState(updateState)
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
      return <option key={emojiString} value={emojiString}>{emoji.getUnicode(emojiString)}</option>
  })
  return emojis
  }

  render() {
    return (
    <div>
      <h1>add a new card</h1>
      <form 
        className="new-card-form"
        onSubmmit={this.onSubmit} >
        <textarea onChange={this.onChange} />
        <select onChange={this.onChange}>{this.emojiList()}</select>
        <button type="submit">Submit</button>
      </form>
    </div>
   
    )
  }
};

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired
};

export default NewCardForm;