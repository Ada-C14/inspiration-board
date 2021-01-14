import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {

  const [cards, setCardsList] = useState([])
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(`${props.url}${props.boardName}/cards`)
      .then( (response) => {
        const apiCardList = response.data;
        setCardsList(apiCardList);
      })
      .catch( (error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  }, []);


  const cardComponents = cards.map(({card}) => {
    return (
      <Card text={card.text} emojiText={card.emoji} key={card.id} />
    )
  })
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
