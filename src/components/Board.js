import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';


const Board = ({url, boardName}) => {
  const API_BOARD_URL = `${url}/boards/${boardName}/`
  const API_CARD_URL = `${url}/cards/`


  const [cards, setCards] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    axios.get(API_BOARD_URL+'/cards')
      .then(response => {
        const apiCardList = response.data
        setCards(apiCardList)
      })
      .catch(error => {
        setErrorMessage(error.message)
        console.log(error.message)
      })
  },[])

 const deleteCard = cardId => {
   const updatedCards = cards.filter(({card}) => card.id !== cardId)

   if (updatedCards.length < cards.length) {
      axios.delete(API_CARD_URL+cardId)
        .then( response => {
          setCards(updatedCards)
          setErrorMessage('')
        })
        .catch( error => {
          setErrorMessage(`Unable to delete card ${cardId}`)
        })
   }  
 }


  const cardComponents = cards.map(({card}) => {
    return(
    <Card key={card.id} id={card.id} text={card.text} cardEmoji={card.emoji} deleteCardCallback={deleteCard} />
    )
  })

  return (
    <div>
      Board
      { errorMessage ? errorMessage : null }
      { cardComponents }
    
    </div>
  )
};

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
