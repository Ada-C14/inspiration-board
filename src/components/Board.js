import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';



const Board = (props) => {
  const API_URL_BASE = `https://inspiration-board.herokuapp.com/boards/${props.boardName}/cards`

  const [allCards, setAllCards] = useState([])

  useEffect(() => {
    axios.get(API_URL_BASE)
    .then((response) => {
      // How to handle a successful response
      setAllCards(response.data)
    })
    .catch((error) => {
      // Still need to handle errors
    });
  }, [cards]);

  const cards = allCards.map(card => {
    return <Card
      key={card.card.id}
      text={card.card.text}
      emoji={card.card.emoji}
    />
  })
  return (
    <div>
      <h1>{props.boardName}</h1>
      {cards}
    </div>
  )
};
Board.propTypes = {
  boardName: PropTypes.string.isRequired
};

export default Board;
