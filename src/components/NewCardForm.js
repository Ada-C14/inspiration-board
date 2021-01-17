import React, { useState, Component } from "react";
import PropTypes from "prop-types";
import emoji from "emoji-dictionary";
import "./NewCardForm.css";

const EMOJI_LIST = [
  "",
  "heart_eyes",
  "beer",
  "clap",
  "sparkling_heart",
  "heart_eyes_cat",
  "dog",
];

const NewCardForm = (props) => {
  const [text, setText] = useState("");
  const [emoji, setEmoji] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addCardCallback({ text, emoji });

    setText("");
    setEmoji("");
  };

  return (
    <form
      className="new-student-form"
      onSubmit={onFormSubmit}
      data-testid="NewStudentForm--form"
    >
      <div>
        <label htmlFor="text">Text:</label>
        <input
          id="text"
          name="text"
          onChange={(event) => setText(event.target.value)}
          value={text}
          className="text"
        />
      </div>
      <div>
        <label htmlFor="emoji">Emoji:</label>
        <input
          id="emoji"
          name="emoji"
          onChange={(event) => setEmoji(event.target.value)}
          value={emoji}
          className="emoji"
        />
      </div>
      <input type="submit" value="Add Card" />
    </form>
  );
};

export default NewCardForm;
