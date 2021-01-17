import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {
  const cardList = CARD_DATA["cards"].map((card, i) => {
    if (!card.text) {
      card.text = '';
    }

    if (!card.emoji) {
      card.emoji = '';
    }

    console.log(card.emoji);
    return(
      <li key={i}>
        <Card text={card.text} emoji={card.emoji}></Card>
      </li>
    )
  });

  return (
    <main className="board">
      {cardList}
    </main>
  )
};
Board.propTypes = {
  cards: PropTypes.shape(
    {
    cards: PropTypes.arrayOf(
      PropTypes.shape(
        {
        text: PropTypes.string,
        emoji: PropTypes.string,
        }
      ))
    }
  )
};

export default Board;
