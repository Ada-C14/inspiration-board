import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';  // Will generate uniq idea


import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = () => {

  const boardComponents = CARD_DATA.cards.map((card) => {
    return (
      <Card 
      key={uuidv4()}
      text={card.text}
      emoji={card.emoji} 
    />
    )
  })
  return (
    <div>
      {boardComponents}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
