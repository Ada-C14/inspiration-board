import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {

  const API_URL_BASE = props.url + props.boardName + '/cards'
  const [cardsList, setCardList] = useState([])
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(API_URL_BASE)
      .then( (response) => {
        const cardsResponseData = response.data.map((card) => {
            return (
            <Card 
              key = {card.card.id}
              id = {card.card.id}
              text = {card.card.text} 
              emoji = {card.card.emoji} 
              onDeleteCallback = {deleteCard}
              />);
        });
        setCardList(cardsResponseData);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, [cardsList]);

  const deleteCard = (cardId) => {

    const API_URL_BASE_DELETE = `https://inspiration-board.herokuapp.com/cards/${cardId}`

    axios.delete(API_URL_BASE_DELETE)
    .then((response) => {
      setErrorMessage(`Succesfully Deleted Card ${cardId}.`)
      const updatedCardsList = cardsList.filter(card => card.id !== cardId)
      setCardList(updatedCardsList);

    })
    .catch((error) => {
      setErrorMessage(error.message);
      console.log(`Cannot Delete Card ${cardId}: ${errorMessage}`);
    })
}

  return (
    <div>
      {cardsList}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
