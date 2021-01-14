import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const API_BOARD_URL = "https://inspiration-board.herokuapp.com/";

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
  }, []);

  
  const cardComponents = cards.map((card) => {
    return (
      <Card text ={card.text} emoji={card.emoji} />
    );
  });

  return (
    <div>
      {cardComponents}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
