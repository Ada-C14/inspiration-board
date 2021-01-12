import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (cards) => {
  // let cardsList = [];

  // for(const card of cards){
  //   cardsList.push(<Card text={card.text} emoji={card.emoji}/>)
  // }

  return (
    <div className='board'>
      <Card text="test" emoji="smile"/>
    </div>
  )
};
Board.propTypes = {

};

export default Board;
