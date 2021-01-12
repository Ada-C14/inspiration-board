import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {


  const cards = CARD_DATA.cards.map((card) => {
    return <Card key={card.id} id = { card.id}
  text = { card.text ? card.text : ''} emoji={ card.emoji ? card.emoji : ''}
  />});
  
  
    return (
      <div>
        <h1>Board</h1>
        <main>
          { cards }
        </main>
      </div>
    )
}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
