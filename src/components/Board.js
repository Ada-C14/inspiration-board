import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';
  
const cards = CARD_DATA.cards.map ((card) => {
  return (
    <Card
    key={card.id}
    text={card.text}
    emoji={card.emoji}
    />
  );
})

const Board = (props) => {
  const API_URL_BASE = `${props.url}/${props.boardName}/cards`
  const [cards, setCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect( () => {
    axios.get(API_URL_BASE)
    .then((response) => {
      // need to return card data, need to create list
      const apiCardData = response.data;
      console.log(apiCardData)
      setCards(apiCardData.card)
    })
    .catch((error) => {
      // Still need to handle errors
      setErrorMessage(error.message);
    });
  }, []);

  return (
    <div className="board">
      {cards}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
