import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';


const Board = (url, boardName) => {
  const[cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(`${url}/${boardName}/cards`)
    .then((response) => {
      setCardList(response.data);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  }, 
  []);

  const cardComponents = cardList.map(({card}) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        text={card.text}
        emoji={card.emoji}
      />
    );
  });

  return (
    <div className="board">
      {errorMessage ? errorMessage : null}
      {cardComponents}
    </div>
  )
};
Board.propTypes = {
  url:PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
