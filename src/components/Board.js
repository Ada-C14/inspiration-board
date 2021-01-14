import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {
  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

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

  const cardComponents = cardList.map(({card}) => {
    return (
    <Card 
        text={card.text} emoji={card.emoji} key={card.id} onDeleteCallback={deleteCard}/>
    )
  })

  const deleteCard = (cardId) => {
    const updatedCards = cardList.filter((card) => { 
      return card.card.id !== cardId;
    })

    if (updatedCards.length < cardList.length) {
      axios.delete(`${props.url}/cards/${cardId}`)
      .then((response) => {
        setCardList(updatedCards);
        console.log(`Card ${cardId} successfully deleted`)
      })
      .catch((error) => {
        setErrorMessage(`Card ${cardId} could not be deleted`);
        console.log(errorMessage)
      });
    }
  }

  return (
    <div>
      {cardComponents}
    </div>
  )
};

Board.propTypes = {
  url: PropTypes.string.isRequired, 
  boardName: PropTypes.string.isRequired

};

export default Board;
