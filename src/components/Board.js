import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';



const Board = (props) => {
  const API_URL_BOARD_BASE = props.url
  const API_URL_CARD_BASE = `https://inspiration-board.herokuapp.com/cards/`

  const [allCards, setAllCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(`${ API_URL_BOARD_BASE }/${ props.boardName }/cards`)
    .then((response) => {
      setAllCards(response.data);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  }, [allCards]);

  const newCard = (newCardData) => {
    axios.post(`${ API_URL_BOARD_BASE }/${ props.boardName }/cards`, newCardData)
    .then((response) => {
      const updatedCardData = [...allCards, response.data];
      setAllCards(updatedCardData);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  };

  const deleteCard = (cardId) => {
    const newCardList = allCards.filter((card) => {
      return card.id !== cardId
    })
    axios.delete(`${ API_URL_CARD_BASE }/${ cardId }`)
    .then((response) => {
      console.log(`${ response.data } was deleted`)
    })
    .catch((error) => {
      setErrorMessage(`Unable to delete card ${ cardId }`);
    });
    setAllCards(newCardList)
  };

  const cards = allCards.map(card => {
    return <Card
      id={card.card.id}
      key={card.card.id}
      text={card.card.text}
      emoji={card.card.emoji}
      deleteCardCallBack={deleteCard}
    />
  });

  return (
    <div>
      {errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : ''}
      <h1>{props.boardName}</h1>
      {cards}
      <NewCardForm newCardCallBack={newCard}/>
    </div>
  )
};

Board.propTypes = {
  boardName: PropTypes.string.isRequired
};

export default Board;
