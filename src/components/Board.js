import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';


const Board = (props) => {

  const [cards, setCards] = useState([])
  const buildURL = `${props.url}${props.boardName}/cards`
  useEffect((props) => {
    axios.get(buildURL)
      .then((response) => {
        console.log(response)
        const apiCards = response.data.map( (element) => element.card );
        setCards(apiCards);
      })
      .catch((error) => {
        // Handle errors here
      })
  }, []);

  const cardList = cards.map( (card) => <Card id={ card.id } text={ card.text } emojiText={ card.emoji } />)

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
