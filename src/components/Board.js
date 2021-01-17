import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

// const API_URL_BASE = 'https://inspiration-board.herokuapp.com/boards/oatcake/cards';

const Board = (props) => {

  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(`${props.url}/${props.boardName}/cards`)
      .then((response) => {
        // Get the list of cards
        const apiCardList = response.data;
        // Set the state
        setCardList(apiCardList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
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
      { errorMessage ? <div><h2 className="validation-errors-display">{errorMessage}</h2></div> : generateCards(cardList) }
    </div>
  )
};
Board.propTypes = {
  // DONT FORGET TO ADD MEEEEE
};

export default Board;
