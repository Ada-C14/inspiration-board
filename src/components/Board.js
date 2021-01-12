import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {

  // const cardList = CARD_DATA.map((card) => {
  //   if (card.text && card.emoji) {
  //     return ({
  //       card: {
  //         text: card.text,
  //         emoji: card.emoji
  //       } 
  //     })
  //   } else if (card.text) {
  //     return ({
  //       card: {
  //         text: card.text,
  //         emoji: null
  //       } 
  //     })
  //   } else if (card.emoji) {
  //     return ({
  //       card: {
  //         text: null,
  //         emoji: card.emoji
  //       } 
  //     })
  //   }
  // })

  return (
    <div className="board">
      <Card text="hello" emoji="beer" />
      <Card text="fuck shit" emoji="cat" />
      <Card text="i am smart" emoji="brain" />
    </div>
  )
};


Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
