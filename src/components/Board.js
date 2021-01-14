import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {

  const [cards, setCards] = useState([])
  const allCards = `${props.url}${props.boardName}/cards`
  useEffect((props) => {
    axios.get(allCards)
      .then((response) => {
        const apiCards = response.data.map( (element) => element.card );
        setCards(apiCards);
      })
      .catch((error) => {
        // Handle errors here
      })
  }, []);

  const deleteCard = ((cardID) => {
    const deleteURL = `https://inspiration-board.herokuapp.com/cards/${cardID}`
    axios.delete(deleteURL)
      .then((response) => {
        const newCardList = cards.filter(card => card.id !== cardID)
        setCards(newCardList);
      })
      .catch((error) => {
        //do something
      })
    
    
  });

  const cardList = cards.map( (card) => <Card id={ card.id } text={ card.text } emojiText={ card.emoji } deleteCard={deleteCard} />)

  return (
    <div className="board">
      { cardList }
    </div>
  )
};
Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
