import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const cards = CARD_DATA.cards

const Board = () => {
  const cardComponent = cards.map((card, i) => {
    return (
        <Card
        key={i}
        text={card.text}
        emoji={card.emoji}
    />
    )
  })
  console.log(cardComponent);

  
  return (
    <div>
      Board
      {cardComponent}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
