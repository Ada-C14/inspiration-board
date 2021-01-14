import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = ({url, boardName}) => {
  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(`${url}/${boardName}/cards`)
    .then((response) => {
      console.log(response.data)
      setCardList(response.data);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  }, []);

  const deleteCard = (id) => {
    const newCardList = cardList.filter((card) => {
      return card.card.id !== id;
    });

    if (newCardList.length < cardList.length) {
      axios.delete(`https://inspiration-board.herokuapp.com/cards/${ id }`)
        .then((response) => {
          setCardList(newCardList);
        })
        .catch((error) => {
          setErrorMessage(`Unable to delete student ${ id }`);
        })
    }
  }

  const cardComponents = cardList.map((card, i) => {
    return (
      <Card
        text={card.card.text}
        emoji={card.card.emoji}
        id={card.card.id}
        key={i}
        onDeleteCard={deleteCard}
      />
    );
  });



  return (
    <div className='board'>
      {cardComponents}
    </div>
  )
};
Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
