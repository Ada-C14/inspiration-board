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
  
  change = (event) => {
    const updateState = this.state
    const n = event.target.name
    const v = event.target.value
    updateState[n] = v
    this.setState(updateState)
  }

  submit = (event) => {
    event.preventDefault();
    this.props.addCardCallback({
      text: this.state.text,
      emoji: this.state.emoji
    });
    this.setState({
        text: '', 
        emoji: '',
    });
  }

  emojiList = () => {
  const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog", "sparkles"]
  const emojis = EMOJI_LIST.map((emojiString) => {
      return <option key={emojiString} value={emojiString}>{emoji.getUnicode(emojiString)}</option>
  })
  return emojis
  }

  render() {
    return (
    <div className="new-card-form">
        <h2>add a new card</h2>
        <div >
        <form onSubmit={this.submit} className="new-card-form__form" >
            <textarea 
            name="text" 
            className="new-card-form__form-textarea"
            onChange={this.change} 
            value={this.state.text} 
            />
            <select 
            name="emoji" 
            className="new-card-form__form-select"
            onChange={this.change} 
            value={this.state.emoji}>
            {this.emojiList()}
            </select>
            <button type="submit" className="new-card-form__form-button">Add this card</button>
        </form>
        </div>
    </div>
    );
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired
};

export default NewCardForm;