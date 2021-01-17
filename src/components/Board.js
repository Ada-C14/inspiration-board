import React, { useEffect, useState } from 'react';
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
    axios.get(`${props.url}/${props.boardName}/cards`)
      .then((response) => {
        const apiCardList = response.data;
        setCardList(apiCardList);
      })
      .catch((error) => {
        // Still need to handle errors
        setErrorMessage(error.message);
      });
  }, []);  
  
  const cardComponents = cardList.map((obj) => {
    return (<Card key={obj.card.id} text={obj.card.text} emoji={obj.card.emoji}/>
    );
  });

  return (
    <div>
      <h2>{props.boardName}</h2>
      {cardComponents}
    </div>
  )
};
Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string
};

export default Board;
