import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {
  //console.log(CARD_DATA.cards[0].text.replace(/\s/g,''))
  //console.log(props.boardName + CARD_DATA.cards[0].text.replace(/\s/g,''))

  const cards = CARD_DATA.cards.map(card => {
    return <Card
      //key={card.text.replace(/\s/g,'')}
      text={card.text}
      emoji={card.emoji}
    />
  })
  return (
    <div>
      <h1>{props.boardName}</h1>
      {cards}
    </div>
  )
};
Board.propTypes = {
  boardName: PropTypes.string.isRequired
};

export default Board;
