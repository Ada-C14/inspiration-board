import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

// const jsonCardList = CARD_DATA.cards.map((card, i) => {
//   return <Card key={i} text={card.text} emoji={card.emoji} />
// });

const Board = (props) => {
  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(`${props.url}boards/${props.boardName}/cards`)
    .then((response) => {
      const apiCardList = response.data
      setCardList(apiCardList);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  }, []);

  const deleteCard = cardId => {
    const newCardList = cardList.filter(cardObj => cardObj.card.id !== cardId);

    if (newCardList.length < cardList.length) {
      axios.delete(`${props.url}cards/${cardId}`)
      .then((response) => {
        setCardList(newCardList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    }
  };

  const addCard = cardObj => {
    axios.post(`${props.url}boards/${props.boardName}/cards`, cardObj)
    .then((response) => {
      const updatedData = [...cardList, response.data];
      setCardList(updatedData);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  };

  const cards = cardList.map(cardObj => {
    return <Card 
            key={cardObj.card.id}
            id={cardObj.card.id} 
            text={cardObj.card.text} 
            emoji={cardObj.card.emoji} 
            onDeleteCard={deleteCard} />
  });

  return (
    <div className="board">
      { errorMessage ? <div className="validation-errors-display">{errorMessage}</div> : '' }
      {cards}
      <NewCardForm addCard={addCard} />
    </div>
  )
};

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
