import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {
  
  const API_URL_BOARD = 'https://inspiration-board.herokuapp.com/boards/'
  const API_URL_CARDS = 'https://inspiration-board.herokuapp.com/cards/'
  
  const [cardsList, setCardsList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
      axios.get(props.url + props.boardName + '/cards')
      .then((response) => {
          const apiCardsList = response.data;
          setCardsList(apiCardsList)
      })
      .catch((
        error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  }, []);

  const deleteCard = (id) => {
    const newCardsList = cardsList.filter((card) => {
      return card.card.id !== id
    });

    if (newCardsList.length < cardsList.length) {
      axios.delete(`${API_URL_CARDS}/${id}`)
      .then((response) => {
        setErrorMessage(`Card ${ id } deleted`);
      })
      .catch((error) => {
        setErrorMessage(`Unable to delete the card ${ id }`);
      })
      setCardsList(newCardsList);
    }
  }

  const cardComponentsList = cardsList.map((card) => {
    return <Card 
    text={card.card.text} 
    emoji={card.card.emoji} 
    key={card.card.id} 
    id={card.card.id} 
    deleteCardCallback={deleteCard}/>
  })

  return (
    <div>
      { errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : '' }
      <h3>Board</h3>
      {cardComponentsList}
    </div>
  )
};

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;