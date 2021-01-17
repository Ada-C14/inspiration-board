import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const API_CARDS_URL = 'https://inspiration-board.herokuapp.com/cards'
const Board = (props) => {

  const [cards, setCards] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  // wave2-use axios to retrieve card data from the end point, using the board endpoint
  // https://inspiration-board.herokuapp.com/boards/mona/cards
  useEffect(() => {
    axios.get(`${props.url}${props.boardName}/cards`)
      .then((response) => {
        const apiCards = response.data;
        setCards(apiCards)
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  // wave3-delete card
  // get the card id
  const deleteCard = (id) => {

    const newCards = cards.filter((oneCard) => {
      return oneCard.card.id !== id
    })

    if (newCards.length < cards.length) {
      axios.delete(`${API_CARDS_URL}/${id}`)
        .then((response) => {
          setErrorMessage(`Card #${id} deleted!`)
        })
        .catch((error) => {
          setErrorMessage(`Unable to delete card #${id}`)
        })
        setCards(newCards)
    }
    
  }

 
  // wave1-render a list of cards
  // CARD_DATA is a obj that has a key(cards) and value(array)
  const cardComponents = cards.map(oneCard => {
    return (
      <Card
        key={oneCard.card.id}
        text={oneCard.card.text} 
        emojiText={oneCard.card.emoji}
        onDeleteCard={deleteCard}
        id={oneCard.card.id}
      />
    )
  })

  // wave3
  // POST requests to the API to create a card on the API.
  const addNewCard = (newcard) => {

    axios.post(`${props.url}${props.boardName}/cards`, newcard)
      .then((response) => {
        const updatedData = [...cards, response.data];
        setCards(updatedData)
        setErrorMessage('')
      })
      .catch((error) => {
        setErrorMessage(errorMessage)
      });
    
  }



  
  return (
    <div classname="board">
      <NewCardForm onAddCard={addNewCard}/>
      {cardComponents}

    </div>
  )
};
Board.propTypes = {
  boardName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired


};

export default Board;
