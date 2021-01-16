import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const Board = (props) => {
  const API_URL_BASE = `${props.url}${props.boardName}/cards`
  const [cardData, setCardData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(API_URL_BASE)
      .then((response) => {
        // need to return card data, need to create list
        const apiCardData = response.data;
        setCardData(apiCardData)
      })
      .catch((error) => {
        // Still need to handle errors
        setErrorMessage(error.message);
      });
  }, []);

  const updateCards = (updatedCard) => {
    const cards = [];

    cardData.forEach((card) => {
      if (card.id === updatedCard.id) {
        cards.push(updatedCard);
      } else {
        cards.push(card);
      }
    });
    setCardData(cards)
  }

  const addCard = (card) => {
    axios.post(API_URL_BASE, card)
      .then((response) => {
        const updatedData = [...cardData, response.data];
        setCardData(updatedData);
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
  }

  const showCards = cardData.map((card) => {
    return (
      <Card
        key={card.card.id}
        text={card.card.text}
        emoji={card.card.emoji}
      />
    );
  })

  return (
    <div className="board">
      {errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : ''}
      {showCards}
      <NewCardForm sendSubmission={addCard} />
    </div>
  )
};
Board.propTypes = {

};

export default Board;
