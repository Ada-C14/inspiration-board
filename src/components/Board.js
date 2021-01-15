import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';


const Board = ({url, boardName, cardUrl}) => {
// console.log(url)
  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  // console.log(cardList)

  useEffect(() => {
    axios.get(`${url}${boardName}/cards`)
    .then((response) => {
      const apiCardList = response.data
      setCardList(apiCardList);
    })
    .catch((error) => {
      setErrorMessage(error.message);
      // console.log(errorMessage);
    });
  }, []);


  const deleteCard = (id) => {
    const newCardList = cardList.filter((cardObj) => {
      // console.log(newCardList)
      return cardObj.card.id !== id;
    });

    if (newCardList.length < cardList.length) {
      axios.delete(`${cardUrl}${id}`)
        .then((response) => {
          setErrorMessage(`Card ${id} has been deleted`);
        })
        .catch((error) => {
          setErrorMessage(`Could not delete card ${id}`);
        });
        setCardList(newCardList);
    };
  };

  const addCard = (card) => {
    // console.log(card)
    axios.post(`${url}${boardName}/cards`, card)
      .then((response) => {
        const updatedBoard = [...cardList, response.data];
        setCardList(updatedBoard);
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const cardComponent = cardList.map(({card}) => {
    return (
        <Card
        key={card.id}
        card={card}
        deleteCardCallback={deleteCard}
    />
    );
  });

  return (
    <div className='board'>
      <NewCardForm onAddCardCallback={addCard} />
      {errorMessage ? <div className='error-msg'>{errorMessage}</div> : ''}
      {cardComponent}
    </div>
  )
};

Board.propTypes = {
  url: PropTypes.string.isRequired,
  cardUrl: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,

};

export default Board;
