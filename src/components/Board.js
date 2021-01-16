import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const cardList = CARD_DATA.cards.map((card, i) => {
  return <Card key={i} text={card.text} emoji={card.emoji} />
});

const Board = (props) => {
  return (
    <div className="board">
      {cardList}
    </div>
  )
};
Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
