import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {
  const [cardList, setCardList] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [newId, setNewId] = useState(-1);

  const nextId = () => {
    const id = cardList.reduce((accumulator, card) => {
      return Math.max(accumulator, card.id);
    }, 0) + 1;
    setNewId(id)
    return newId;
  };

  const deleteCard = (id) => {
    const newCardList = cardList.filter ((card) => {
      return card.id !== id;
    })

    if (newCardList.length < cardList.length) {
      axios.delete(`${props.url}/cards/${id}`)
        .then((response) => {
          console.log(`Card ${id} was successfully deleted`);
        })
        .catch((error) => {
        setErrorMessage(`An error occurred when trying to delete card ${id}. ${error.message}`);
        console.log(errorMessage);
        })
      setCardList(newCardList);
    }
  }

  useEffect(() => {
    axios.get(`${props.url}${props.boardName}/cards`)
      .then((response) => {
        const apiCardList = response.data;
        setCardList(apiCardList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  const cardComponent = cardList.map(({card}) => {
    return (
      <Card text={card.text} emoji={card.emoji} id={card.id} deleteCard={deleteCard}/>
    );
  });

  return (
    <div>
      {cardComponent}
    </div>
  )
};
Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
