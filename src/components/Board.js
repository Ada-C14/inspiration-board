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
    const newCards = cards.filter(({card}) => card.id !== cardId)

    if (newCards.length < cards.length) {
        axios.delete(API_CARD_URL+cardId)
          .then( response => {
            setCards(newCards)
            setErrorMessage('')
          })
          .catch( error => {
            setErrorMessage(`Unable to delete card ${cardId}`)
          })
    }  
  }

  const addCard = cardData => {
    axios.post(API_BOARD_URL+'/cards', cardData)
      .then( response => {
        const newCards = [...cards, response.data]
        setCards(newCards)
        setErrorMessage('')
      })
      .catch( error => {
        setErrorMessage(error.message)
      })
  }

  const cardComponents = cards.map(({card}) => {
    return(
    <Card key={card.id} card={card} deleteCardCallback={deleteCard} />
    )
  })

  return (
    <div className="board">
      { errorMessage ? <div className="validation-errors-display">{errorMessage}</div> : null }
      <NewCardForm onSubmitCardCallback={addCard} />
      { cardComponents }
    
    </div>
  )
};

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
