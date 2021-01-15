import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

const Board = (props) => {
  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const API_URL = "https://inspiration-board.herokuapp.com/cards/"
  useEffect(() => {
    axios.get(`${props.url}${props.boardName}/cards`) 
      .then((response) => {
        console.log(response)
        const apiCardList = response.data; 
        setCardList(apiCardList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  
  const deleteCard = (cardId) => {
    const updatedCards = cardList.filter((card) => { 
      return card.card.id !== cardId;
    });

    if (updatedCards.length < cardList.length) {
      axios.delete(`${API_URL}${cardId}`)
      .then((response) => {
        // setCardList(updatedCards);
        setErrorMessage('');
        console.log(`Card ${cardId} successfully deleted`)
      })
      .catch((error) => {
        setErrorMessage(`Card ${cardId} could not be deleted`);
        console.log(errorMessage)
      });
      setCardList(updatedCards);

    };
  };

  const addCard = (card) => {
    axios.post(`${props.url}${props.boardName}/cards`, card)
      .then((response) => {
        const updatedCards = [...cardList, response.data]
        console.log("Card successfully added.")
        setCardList(updatedCards);
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage('Card could not be added')
      });

  }

  const cardComponents = cardList.map(({card}) => {
    return (
    <Card 
        text={card.text} emoji={card.emoji} key={card.id} id={card.id} onDeleteCallback={deleteCard}/>
    )
  })

  return (
    <div>
      <NewCardForm onAddCard={addCard} />
      <div className="board">
        {cardComponents}
      </div>
    </div>
  )
};

Board.propTypes = {
  url: PropTypes.string.isRequired, 
  boardName: PropTypes.string.isRequired
};

export default Board;
