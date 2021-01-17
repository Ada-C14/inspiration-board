import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {

  const boardComponents = CARD_DATA.cards.map((card, key) => {
    return (
      <div className="board" key={key}>
        <Card
          text={card.text}
          emoji={card.emoji}
        />
      </div>
    )
  });
console.log(boardComponents)
  return (
    <div>
      {boardComponents}
    </div>
  )
}

  

Board.propTypes = {

};

export default Board;
