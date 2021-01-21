import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = () => {
  const boardCards = CARD_DATA.cards.map((card) => {
    return (
      <li >
        <Card text={card.text}/>
      </li>
    )
  })
  return (
    <div>
      {boardCards}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
