import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const dummyCards = [
  {
      "card": {
          "id": 2717,
          "text": "100",
          "emoji": '100'
      }
  },
  {
      "card": {
          "id": 2718,
          "text": "BE EXCELLENT TO EACHOTHER",
          "emoji": null
      }
  },
  {
      "card": {
          "id": 2719,
          "text": "BREATHE",
          "emoji": null
      }
  }]

  const generateBoard = (dummyCards) => {
    const cards = dummyCards.map((card) => {
      return (
        <Card id={card.card.id} text={card.card.text} emoji={card.card.emoji}/>
      );
    });
    return cards;
  }

const Board = () => {
  const cardList = generateBoard(dummyCards)
  return (
    <div className="board">
      {cardList}
    </div>
  )
};
Board.propTypes = {
  

};

export default Board;
