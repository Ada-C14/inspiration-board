import React from 'react';
import PropTypes from 'prop-types';

import './Board.css';
import Card from './Card';


const Board = (props) => {
  
  const getCards = () => {
    const processed = props.cards.map(card => {
      return(
      <Card key={card.card.id} id={card.card.id} text={card.card.text} emoji={card.card.emoji} onDelete={props.deleteCard} />
      );
    })
    return processed;
  }


  return (
    <div>
      {getCards()}
    </div>
  )
};

Board.propTypes = {

};

export default Board;
