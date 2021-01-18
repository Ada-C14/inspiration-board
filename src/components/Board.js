import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';



const Board = (url, boardName) => {
  const [errorMessage, setErrorMessage] = useState([]);
  const [cards, setCards] = useState([]);
  const API_URL_BASE = `${url}/${boardName}`

  useEffect(() => {
    axios.get(API_URL_BASE)
      .then((response) => {
        const apiCards = response.data;
        setCards(apiCards);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  }, []);
  
  const makeCards = cards.map((card,i) => {
    return(
      <Card
      text={card.card.text}
      key={i}
      />
    );
  })
  
  return (
    <div>
      {makeCards}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
