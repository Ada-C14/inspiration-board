import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {
  const [cardList, setCardList] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  // const [newId, setNewId] = useState(-1);

  useEffect(() => {
    axios.get(`${props.url}boards/${props.boardName}/cards`)
      .then((response) => {
        const apiCardList = response.data.map((apiCard) => {
          return {
            id: apiCard['card']['id'],
            emoji: apiCard['card']['emoji'],
            text: apiCard['card']['text']
          }
        });
        setCardList(apiCardList);
        // nextId()
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  // const nextId = () => {
  //   const id = cardList.reduce((accumulator, card) => {
  //     return Math.max(accumulator, card.id);
  //   }, 0) + 1;
  // };

  const deleteCard = (cardId) => {
    const newCardList = cardList.filter((card) => {
      return (card.id !== cardId)
    });


    if (newCardList.length < cardList.length) {
      axios.delete(`${props.url}/cards/${cardId}`)
        .then((response) => {
          setErrorMessage(`Card ${cardId} was successfully deleted`);
        })
      .catch((error) => {
        setErrorMessage(`An error occurred when trying to delete card ${cardId}. ${error.message}`);
        console.log(errorMessage);
      })
      setCardList(newCardList);
    }
  };

  const cardComponent = cardList.map((card) => {
    return (
      <Card text={card.text} emoji={card.emoji} id={card.id} deleteCard={deleteCard}/>
    );
  });

  return (
    <div>
      {errorMessage ? <div><h2>{errorMessage}</h2></div> : ''}
      {cardComponent}
    </div>
  )
};
Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
