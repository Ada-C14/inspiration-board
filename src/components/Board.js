import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const cards = CARD_DATA["cards"]
const apiLink = 'https://inspiration-board.herokuapp.com/cards/'

const Board = (props) => {

  const[cardList, setCardList] = useState(cards);
  const [errorMessage, setErrorMessage] = useState(null);

  const cardsRequest = `${props.url}${props.boardname}/cards`

  useEffect(() => {
    axios.get(cardsRequest)
      .then((response) => {
        const apiCards = response.data.map((element) => element.card);
        setCardList(apiCards);
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
  }, []);

  const deleteCard = ((card) => {
    axios.delete(`${apiLink}${card}`)
      .then((response) => {
        const newList = cards.filter(card => card.id !== card)
        setCardList(newList);
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage('Card not deleted!');
      })
    }
  );

  const addCardCallback = ((card) => {
    axios.post(`${apiLink}`, card)
    .then((response) => {
      const updateCards = [...cardList, response.data];
      setCardList(updateCards);
      setErrorMessage(''); 
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  })

  const renderCards = cardList.map((card) => {
    return (
        <Card 
          text={card.text} 
          emoji={card.emoji} 
          deleteCard={(id) => deleteCard(id)}
          id={card.id}
          key={card.id}
         />
    )
  });

  return (
    <div>
      <div>
        <NewCardForm addCardCallback={addCardCallback} />
      </div>
      <div className="board">
      { errorMessage ? <div className="validation-errors-display"><h2>{errorMessage}</h2></div> : '' }
        {renderCards}
      </div>
    </div>
  );
}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardname: PropTypes.string.isRequired
};

export default Board;
