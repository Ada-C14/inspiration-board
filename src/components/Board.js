import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {

  const [cards, setCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);


  useEffect(() => {
    axios.get(`${props.url}${props.boardName}/cards`)
      .then((response) => {
        const apiCards = response.data;
        setCards(apiCards);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);
  
  const cardComponents = cards.map(({card}) => {
    return(
    <Card key={card.id} card={card}/>
    );
  });
  return (
    <div>
      Board
    </div>
  )
};
Board.propTypes = {

};

export default Board;
