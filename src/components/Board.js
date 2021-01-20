import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {

  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {

    axios.get(props.boardUrl + props.boardName + '/cards')
    .then((response) => {
      setCardList(response.data);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  }, []);

  const generateCards = cards.map((card) => {

    return (
      <Card
        key = {card.card.id}
        card = {card.card}
      />
    )
  });

  return (
    <div>
      { boardName }  Board
      {generateCards || errorMessage}
    </div>
  )
};

Board.propTypes = {
  boardUrl: PropTypes.string.isRequired,
  cardUrl: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
