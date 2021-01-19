import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';



const Board = (props) => {
  // const BOARD_URL_BASE = `${props.url}/boards/${props.boardName}`;
  const CARDS_API_URL = `${props.url}/boards/${props.boardName}/cards`;
  const DELETE_CARD_URL = `${props.url}/cards`

  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    axios.get(CARDS_API_URL)
      .then((response) => {
        // Get the list of students
        const apiCardList = response.data;
        // Set the state
        setCardList(apiCardList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  }, []);

  const addCard = (card) => {
    axios.post(CARDS_API_URL, card)
      .then((response) => {
        const updatedData = [...cardList, response.data];
        setCardList(updatedData);
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }


  const deleteCard = (id) => {
    const newCardList = cardList.filter(({card}) => {
      return card.id !== id;
    });

    if (newCardList.length < cardList.length) {
      axios.delete(`${DELETE_CARD_URL}/${id}`)
        .then((response) => {
          setErrorMessage(`Card ${id} deleted`);
          setCardList(newCardList);
        })
        .catch((error) => {
          console.log(error.message)
          setErrorMessage(`Unable to delete card ${id}`);
        })
    }
  }

  const cardComponents = cardList.map(({card}) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        text={card.text}
        emoji={card.emoji} 
        onDeleteCardCallback={deleteCard}
      />
    );
  });

  return (
    <div className="board">
      { errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : '' }
      {cardComponents}
      <NewCardForm addCardCallback={addCard} />
    </div>
  )
};

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
