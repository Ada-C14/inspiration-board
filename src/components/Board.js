import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const API_URL_BASE = 'https://inspiration-board.herokuapp.com/boards/oatcake/cards';

const Board = () => {

  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    axios.get(API_URL_BASE)
      .then((response) => {
        // Get the list of students
        const apiCardList = response.data;
        // Set the state
        setCardList(apiCardList);
      })
      .catch((error) => {
        // Still need to handle errors
      });
  }, []);
  // ...

  const generateCards = (cards) => {
    let cardsComponentArray = [];
    // console.log(cards)

  for (const card of cards) 
  // console.log(card[`card`][`id`])
  {
    cardsComponentArray.push(
      <Card
          id={card[`card`][`id`]}
          text={card[`card`][`text`]}
          emoji={card[`card`][`emoji`]}
      />
    )
  }

    return cardsComponentArray;
  }; 

  return (
    <div className = 'board'>
      {generateCards(cardList)}
    </div>
  )
};
Board.propTypes = {
  // DONT FORGET TO ADD MEEEEE
};

export default Board;
