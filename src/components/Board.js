import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const API_BOARD_URL = "https://inspiration-board.herokuapp.com/cards/";

const Board = (props) => {

  const [cards, setCards] = useState(CARD_DATA.cards);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(`${props.url}${props.boardName}/cards`)
      .then((response) => {
        const apiCards = response.data.map(data => {
          return data.card
        });
        setCards(apiCards);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  },[]);

  const deleteCard = (id) => {
    const newCardList = cards.filter((card)=> {
      return card.id !== id;
    });

    if (newCardList.length < cards.length) {
      axios.delete(`${API_BOARD_URL}${id}`)
        .then((response) => {
        })
        .catch((error)=> {
          setErrorMessage(`Unable to delete card ${id}`);
        })
        setCards(newCardList);
    }
  } 

  const addCard = (card) => {
    axios.post(`${API_BOARD_URL}${card}`);
      .then((response) => {
        const updatedCardData = [...cards,response.data];
        setCards(updatedCardData);
        setErrorMessage(error);
      })
      .catch((error) =>{
        setErrorMessage(error.message);
      });
  }

  const cardComponents = cards.map((card) => {
    return (
      <Card text ={card.text} emoji={card.emoji} key={card.id} id={card.id} onDeleteCallback={deleteCard}/>
    );
  });

  return (
    <div className="board">
      { errorMessage ? <div><h3 className="validation-errors-display">{errorMessage}</h3></div> : '' }
      {cardComponents}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
