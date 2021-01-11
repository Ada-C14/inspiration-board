import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';



const Board = ({url, boardName}) => {
  const API_BOARD_URL = `${url}${boardName}/`
  const [cards, setCards] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    axios.get(API_BOARD_URL+'cards')
      .then(response => {
        console.log("data")
        console.log(typeof response.data)
        const apiCardList = response.data
        setCards(apiCardList)
      })
      .catch(error => {
        setErrorMessage(error.message)
        console.log(error.message)
      })
  },[])

  const cardComponents = cards.map(({card}) => {
    return(
    <Card text={card.text} cardEmoji={card.emoji} key={card.id} />
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
