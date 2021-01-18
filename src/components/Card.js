import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends React.Component {
  render () {
    return (
      <div className="card">
        <h3 className="card__content">{this.props.text}</h3>
        <h3 className="card__content">{this.props.emoji && this.props.emoji.length > 0 ? emoji.getUnicode(this.props.emoji) : ""}</h3>
        <button 
          id={this.props.id}
          onClick={(event) => this.props.deleteCardCallback(event.target.id)}
          className="card__delete">
          delete
        </button>
      </div>
    )
  } 
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number.isRequired,
  deleteCardCallback: PropTypes.func.isRequired
};

export default Card;
