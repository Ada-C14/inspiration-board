import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const Board = (props) => {

    const allCards = `${props.url}${props.boardName}/cards`

    const [cards, setCards] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
  
    useEffect(() => {
      axios.get(allCards)
        .then((response) => {
          const apiCardList = response.data.map((element) => element.card);
          setCards(apiCardList);
        })
        .catch((error) => {
          setErrorMessage(error.message);
          console.log(error.message);
        });
    }, []);


    const addCard = ((newCard) => { // need to create NewCardForm
      axios.post(allCards, newCard)
        .then((response) => {
          const newCardList = [...cardList, response.data.card]
          setCards(newCardList)
        })
        .catch((error) => {
          setErrorMessage(error.message);
          console.log(error.message);  
        });
    })

    const deleteCard = (cardToDelete) => {
      axios.delete(allCards, cardToDelete)
        .then((response) => {
          const newCardList = cards.delete(cardToDelete)
          setCards(newCardList)
        })
        .catch((error) => {
          setErrorMessage(error.message);
          console.log(error.message);  
        });
    }

    const cardList = cards.map((card) =>
      <Card 
        key={card.id}
        id={card.id}
        text={card.text}
        emoji={card.emoji}
        deleteCard={deleteCard}
        />
    )


  return (
    <div className="board">
      {cardList}
      <button onSubmit={addCard}>Add Card</button>
    </div>
  )
  
};


Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
