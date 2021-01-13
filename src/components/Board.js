import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {
  const cards = CARD_DATA.cards.map ((card) => {
    return (
      <Card
      key={card.id}
      text={card.text}
      emoji={card.emoji}
      />
    );
  })

  useEffect(() => {
    axios.get(props.url/props.boardName)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.data)
    });
  }, []);
  return (
    <div className="board">
      {cards}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
