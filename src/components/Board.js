import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const cards = CARD_DATA.cards.map ((card) => {
  return (
    <Card
    key={card.id}
    text={card.text}
    emoji={card.emoji}
    />
  );
})


const Board = () => {

  // useEffect(() => {
  //   localStorage.setItem('test', JSON.stringify(CARD_DATA));
  // }, []);
  return (
    <div>
      {cards}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
