import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';


const Board = (props) => {
  const cardList = CARD_DATA.cards.map((card) {
    return (
      <Card
        key={card.id}
        id={card.id}
        text={card.text}
        emoji={card.emoji}
    );
  )};

  return (
    <div className="board">
      {cardList}
    </div>
  )
};
Board.propTypes = {
  url:PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
