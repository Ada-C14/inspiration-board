import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = () => {
  const boardComponents = CARD_DATA.cards.map((card, i) => {
    return (
      <li key={i}>
        <Card 
          text={card.text} 
          emoji={card.emoji} 
        />
      </li>
    );
  });

  return (
    <div>
      { boardComponents }
    </div>
  )
};
Board.propTypes = {

};

export default Board;
