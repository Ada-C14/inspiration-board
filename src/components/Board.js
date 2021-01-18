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
    const newCardList = cards.filter((card)=> { // function card will return card to delete
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

  const addCard = ((card) => {
    axios.post(`${props.url}${props.boardName}/cards`, card)
      .then((response) => {
        const updatedCardData = [...cards,response.data];
        setCards(updatedCardData);
      })
      .catch((error) =>{
        setErrorMessage(error.message);
      });
  })

  const cardComponents = cards.map((card) => {
    return (
      <Card text ={card.text} emoji={card.emoji} key={card.id} id={card.id} onDeleteCallback={deleteCard}/>
    );
  });

  return (
    <div className="board">
      <NewCardForm addNewCardCallback={addCard}/>
        { errorMessage ? <div className="validation-errors-display" >
        <ul className="validation-errors-display__list">{errorMessage}</ul></div> : '' }
        {cardComponents}
    </div>
  )
};

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
