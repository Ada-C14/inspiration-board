import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const Board = (props) => {

  const [cards, setCards] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const CARD_URL = 'https://inspiration-board.herokuapp.com/cards/'

  useEffect(() => {
    axios.get(props.url)
    .then((response) => {
      const allCards = response.data
      setCards(allCards)
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  }, []);

  const addCard = (card) => {
    axios.post(props.url,card)
      .then((response) => {
        const updatedCards = [...cards, response.data];
        setCards(updatedCards);
        setErrorMessage('New card successfully created')
      })
      .catch((error) => {
        setErrorMessage(error.message)
      });
  };

  const deleteCard = (cardId) => {
    const newCards = cards.filter((card) => {
      return card.card.id !== cardId
    });

    if (newCards.length < cards.length) {
      axios.delete(`${CARD_URL}${cardId}`)
      .then((response) => {setErrorMessage(`Card ${cardId} successfully deleted!`);})
      .catch((error) => {setErrorMessage(`Unable to delete Card ${cardId}`);})

    setCards(newCards);
    }
  };

  const cardList = cards.map((card) => {
    return (
      <Card key={card.card.id} card={card.card} deleteCallback={deleteCard} />
    )
  });

  return (
    <div>
      <p className='validation-errors-display' >{errorMessage}</p>
      <NewCardForm addCardCallback={addCard}  setError={setErrorMessage} />
      
      <div className='board'>
      { cardList }
      </div>
    </div>
  )
};
Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string
};

export default Board;
