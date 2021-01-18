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
      cards: [],
      message: ''
    }
  }
  

  componentDidMount() {
    axios.get(`${this.props.url}${this.props.boardName}/cards`)
      .then(response => {
        const cards = []
        response.data.forEach((card) =>
          cards.push({
            text: card.card.text,
            emoji: card.card.emoji,
            id: card.card.id
          })
        )
        this.setState({cards, message: ''})
      })
      .catch(error => {
        this.setState({message: error.data})
      })
  };

  getCards = () => {
    return this.state.cards.map((card, index) => {
      return (<Card 
        text={card.text}
        emoji={card.emoji}
        id={card.id}
        key={index}
      />)
    })
  }

  addCard = (card) => {
    axios.post(`${this.props.url}${this.props.boardName}/cards`, card)
      .then(response => {
        card.id = response.data.card.id
      })
      .catch(error => {
        this.setState({message: error.data})
      })
      const cards = this.state.cards
      cards.push(card)
  }

  render() {
    return (
      <div>
        {this.message}
        <NewCardForm
          addCardCallback={this.addCard}
        />
        <main className="board">
          {this.getCards()}
        </main>
      </div>
    )
  }
};

Board.propTypes = {
  boardName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Board;
