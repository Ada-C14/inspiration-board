import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = () => {
  const generateCards = CARD_DATA.cards.map((card,index) => {
    return (
      <Card
        key = {index}
        text = {card.text}
        emoji = {card.emoji}
      />
    )
  })
  return (
    <div>
      Board
      {generateCards}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
