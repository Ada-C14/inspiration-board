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

  
  useEffect(() => {
    axios.get(`${props.url}${props.boardName}/cards`)
      .then((res) => {
        const apiCards = res.data;
        setCards(apiCards)
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  }, [props.boardName]);

  const deleteCard = (id) => {
    
    const newCards = cards.filter((singleCard) => {
      return singleCard.card.id !== id;
    })

    // not going into this conditional because the newCards length is the same as the cards length 
    // the DS is a layer deeper than I thought, it's singleCard.card.id not card.id
    if (newCards.length < cards.length) {
      axios.delete(`${API_CARDS_URL}/${id}`)
      .then((res) => {
        setErrorMessage(`Card #${id} deleted!`)
      })
      .catch((err) => {
        setErrorMessage(`Unable to delete card #${id}`)
      })
      setCards(newCards)
    }
  }

  const cardComponents = cards.map(singleCard => {
    return (
      <Card 
        key={singleCard.card.id}
        id={singleCard.card.id}
        text={singleCard.card.text} 
        emojiText={singleCard.card.emoji}
        onDeleteCard={deleteCard}
      />
    )
  })

  const addCard = (card) => {
   
    axios.post(`${props.url}${props.boardName}/cards`, card)
      .then((res) => {
        const updatedData = [...cards, res.data];
        setCards(updatedData)
        setErrorMessage('')
      })
      .catch((err) => {
        setErrorMessage(errorMessage)
      });
  }


  return (
    <>
    <NewCardForm onAddCard={addCard}/>
    <div className="board">
      {cardComponents}
    </div>
    </>
  )
};
Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
