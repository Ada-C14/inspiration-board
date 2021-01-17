import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const generateCardComponents = () => {
  const cards = CARD_DATA.cards;

  return cards.map((card, index) => {
    return (
      <Card key={ index } card={ card } />
    )
  });
}

const Board = () => {
  const cards = generateCardComponents();

  return (
    <div>
      Board
      { cards }
    </div>
  )
};
Board.propTypes = {

};

export default Board;
