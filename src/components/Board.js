import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = () => {

  const generateCards = () => {
    const cards = CARD_DATA[`cards`];
    let cardsComponentArray = [];

  for (const card of cards) 
  {
    cardsComponentArray.push(
      <Card
          text={card[`text`]}
          emoji={card[`emoji`]}
      />
    )
  }

    return cardsComponentArray;
  }  

  return (
    <div className = 'board'>
      {generateCards()}
    </div>
  )
};
Board.propTypes = {
  // DONT FORGET TO ADD MEEEEE
};

export default Board;
