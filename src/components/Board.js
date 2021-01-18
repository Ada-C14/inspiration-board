import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  // const cards = CARD_DATA.cards.map((card) => {
  //   return <Card 
  //     text={card.text}
  //     emoji={card.emoji}
  //     deleteCardCallback={card.deleteCardCallback}
  //   />
  // })
  // render() 
  //   return(
  //     <div>
  //       {cards}
  //       {NewCardForm}
  //     </div>
  // )
  constructor() {
    super();
    this.state = {
      cards: []
    }
  }
  

  componentDidMount() {
    axios.get(`${this.props.url}${this.props.boardName}/cards`)
      .then(response => {
        const cards = []
        response.data.forEach((card) =>
          cards.push({
            text: card.text,
            emoji: card.emoji,
            id: card.id
          })
        )
        this.setState(cards)
      })
      .catch(error => {
        this.setState({message: error.data})
      })
  };

  // const getCards = 

  render() {
    return (
      <ul>
        <li>{this.state.cards}</li>
      </ul>
    )
  }
};

Board.propTypes = {
  boardName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Board;
