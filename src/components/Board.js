import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';



const Board = (props) => {
  // const API_URL_BASE = `${props.url}/${props.boardName}`;
  const CARDS_API_URL = `${props.url}/${props.boardName}/cards`;
  // const newCardComponents = ...
  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    axios.get(CARDS_API_URL)
      .then((response) => {
        // Get the list of students
        const apiCardList = response.data;
        // Set the state
        setCardList(apiCardList);
      })
      .catch((error) => {
        // Still need to handle errors
        setErrorMessage(error.message);
        console.log(error.message);
      });
  }, []);

  const cardComponents = cardList.map(({card}) => {
    return (
      <Card
        text={card.text}
        emoji={card.emoji} 
      />
    );
  });


  return (
    <div className="board">
        { errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : '' }
      {cardComponents}
    </div>
  )
};
Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
