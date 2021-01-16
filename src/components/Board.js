import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {

  const API_URL_BASE = props.url + props.boardName + '/cards'

  console.log(API_URL_BASE)

  const [cardList, setCardList] = useState([])
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(API_URL_BASE)
      .then( (response) => {
        const cardsResponseData = response.data.map((card) => {
            return (<Card 
              key = {card.card.id}
              text = {card.card.text} 
              emoji = {card.card.emoji} 
              />);
        });
        setCardList(cardsResponseData);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  return (
    <div>
      {cardList}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
