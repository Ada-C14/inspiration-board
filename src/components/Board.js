import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

class Board extends Component {
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
        this.setState({cards})
      })
      .catch(error => {
        console.log(error.data)
      });
  };

  getCards = () => {
    return this.state.cards.map((card, index) => {
      return (<Card 
        text={card.text}
        emoji={card.emoji}
        id={card.id}
        key={index}
        deleteCardCallback={this.deleteCard}
      />)
    });
  }

  addCard = (card) => {
    axios.post(`${this.props.url}${this.props.boardName}/cards`, card)
      .then(response => {
        card.id = response.data.card.id
      })
      .catch(error => {
        console.log(error.data)
      });
      const newCards = this.state.cards
      newCards.push(card);
      this.setState({newCards});
  }

  deleteCard = (id) => {
    const cards = this.state.cards.filter((card) => card.id !== Number(id))
    this.setState({cards})
    axios.delete(`${this.props.url}${this.props.boardName}/cards/${id}`)
      .then(() => {
        console.log('card deleted')
      })
      .catch((error) => {
        console.log(error.data)
      })
  }

  render() {
    return (
      <div>
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
