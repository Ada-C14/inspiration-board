import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {
  const API_URL_BASE = `${props.url}/${props.boardName}`
  const [cardData, setCardData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  // const cardData = CARD_DATA.cards.map ((card) => {
  //   return (
  //     <Card
  //     key={card.id}
  //     text={card.text}
  //     emoji={card.emoji}
  //     />
  //   );
  // })
  

  useEffect(() => {
    axios.get(API_URL_BASE)
    .then((response) => {
      // Get the list of card-data
      const apiCardData = response.data.map((cardData) => {
        return {
          id: cardData.card.id,
          emoji: cardData.card.emoji,
          text: cardData.card.text}
      });
      // Set the state
      setCardData(apiCardData);
      })
    .catch((error) => {
      setErrorMessage(error.message);
      console.log(error.message);
    });
  }, [API_URL_BASE]);
  return (
    <div className="board">
      {errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : '' }
      {/* {cardData} */}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
