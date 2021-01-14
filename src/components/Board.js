import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const url = 'https://inspiration-board.herokuapp.com/boards/noor/cards'

const Board = () => {
  const [cardsList, setCardsList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(()=>{
    axios.get(url)
    .then((response) => {
      const apiCardsList = response.data;
      setCardsList(apiCardsList);
    })
    .catch((error)=>{
      setErrorMessage(error.message);
      console.log(error.message);
    });
  }, []);

  const allCards = cardsList.map((card, i) => {
    return (
      <Card text={card.card.text} emoji={card.card.emoji} key ={i}/>
    );
  });

  return(
    <div className='board'>
    { errorMessage ? <div><h2>{errorMessage}</h2></div> : '' }
    {allCards}
  </div>
  )

  // const cards = CARD_DATA.cards.map((card) => {
  //   return (
  //   <Card text={card.text} emoji={card.emoji} />
  //   );
  // });

};

Board.propTypes = {
// url: PropTypes.string.isRequired,
// boardName: PropTypes.string.isRequired
};

export default Board;