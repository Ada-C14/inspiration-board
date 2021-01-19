import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = () => {
  const cardData = CARD_DATA.cards.map((card, i) => {
    return (
      <Card 
        key={i}
        text={card.text}
        emoji={card.emoji}
      />
    )
  })
  return (
    <div>
      Board
      {cardData}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
