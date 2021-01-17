import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = () => {
  // using and incrementer in map not the best way to add a key??
  const cardComponents = CARD_DATA.cards.map ((card, i) => {
    return (
      <Card message={card} key={i}/>
    )
  })
  return (
    <div>
      {cardComponents}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
