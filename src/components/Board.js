import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';



const Board = (url, boardName) => {
  const [errorMessage, setErrorMessage] = useState([]);
  const [cards, setCards] = useState([]);
  const API_URL_BASE = `${url}/${boardName}`

  useEffect(() => {
    axios.get(API_URL_BASE)
      .then((response) => {
        let apiCards = response.data;
        if (apiCards.length === 0) {
          setCards(CARD_DATA['cards'])
          console.log(CARD_DATA['cards'])
        } else {
          setCards(apiCards);
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  }, []);

  const deleteCard = (cardId) => {
    let cardsLength = cards.length
    for (let i = 0; i < cardsLength; i ++) {
      if (cardId === cards[i].id) {
        axios.delete(`${url}/cards/${cardId}`)
      .then((response) => {
        let newCards = response.data;
        console.log(`Card ${cardId} was deleted.`)
        setCards(newCards);
      })
      .catch((error) => {
        const message = `${cardId} was not deleted. ${error.message}`
        setErrorMessage(message);
        console.log(message)
      })
    
      }
    }
};
  
  const makeCards = CARD_DATA.cards.map((card,i) => {
    return(
      <Card
      text={card.text}
      key={i}
      />
    );
  })
  
  return (
    <div>
      {makeCards}
    </div>
  )
};
Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;