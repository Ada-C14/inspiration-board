import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

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

  // wave1-render a list of cards
  // CARD_DATA is a obj that has a key(cards) and value(array)
  const cardComponents = cards.map(oneCard => {
    return (
      <Card
        key={oneCard.card.id}
        text={oneCard.card.text} 
        emojiText={oneCard.card.emoji}
      />
    )
  })


  
  return (
    <div>
      {cardComponents}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
