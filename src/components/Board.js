import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

// const API_URL_BASE = 'https://inspiration-board.herokuapp.com/boards/oatcake/cards';
const CARD_URL_BASE = `https://inspiration-board.herokuapp.com/cards/`

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
          deleteCard={deleteCard}
      />
    )
  }

    return cardsComponentArray;
  }; 

  const addCard = (card) => {
    axios.post(`${props.url}${props.boardName}/cards`, card)
      .then((response) => {
        const updatedCards = [...cardList, response.data]
        console.log("Card successfully added.");
        setCardList(updatedCards);
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage('Card could not be added');
        console.log(errorMessage);
      });
  }

  const deleteCard = (id) => {
    console.log(id);
    const result = cardList.filter(card => card.card.id === id);
    console.log(result);
    if (result) {
      axios.delete(`${CARD_URL_BASE}${id}`)
      .then((response) => {
        // What should we do when we know the post request worked?
        const updatedData = cardList.filter(card => card != result);
        setCardList(updatedData);
        setErrorMessage('');
        console.log(`Card ${id} successfully deleted`);
      })
      .catch((error) => {
        // What should we do when we know the post request failed?
        setErrorMessage(error.message);
      });
    }
  };

  return (
    <div className = 'board'>
      { errorMessage ? <div><h2 className="validation-errors-display">{errorMessage}</h2></div> : generateCards(cardList) }
      <NewCardForm onAddCard={addCard} />
    </div>
  )
};
Board.propTypes = {
  // DONT FORGET TO ADD MEEEEE
};

export default Board;
