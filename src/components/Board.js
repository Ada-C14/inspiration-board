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
          key={card.id}
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
    // make sure the id exists in current list, save it as a var
    // const result = cardList.filter(card => card.card.id === id);
    // console.log(result);
    // if (result) {
      const updatedData = cardList.filter(card => card.card.id !== id);
      console.log(updatedData);
      setCardList(updatedData);
      
      axios.delete(`${CARD_URL_BASE}${id}`)
      .then((response) => {
        // make new list excluding result, as it now should be deleted
        // const updatedData = cardList.filter(card => card !== result);
        // console.log(updatedData);
        // setCardList(updatedData);
        setErrorMessage(''); // not sure why need this, but it was in the students example
        console.log(`Card ${id} successfully deleted`);
      })
      .catch((error) => {
        // display error message if failure
        setErrorMessage(error.message);
      });
    // }
  };

  return (
    <section>
      <div className = 'board'>
        { errorMessage ? <div><h2 className="validation-errors-display">{errorMessage}</h2></div> : generateCards(cardList) }
      </div>
      <div><NewCardForm onAddCard={addCard} /></div>
    </section>
  )
};

Board.propTypes = {
  url: PropTypes.string.isRequired, 
  boardName: PropTypes.string.isRequired
};

export default Board;
