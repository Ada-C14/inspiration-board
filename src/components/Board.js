import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';



const Board = (props) => {
  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  // initial API call to set state of cardList
  useEffect(() => {
    axios.get(`${props.url}/${props.boardName}/cards`)
      .then((response) => {
        const apiCardList = response.data;
        setCardList(apiCardList);
      })
      .catch((error) => {
        // Still need to handle errors
        setErrorMessage(error.message);
      });
  }, []);  
  
  const deleteCard = (id) => {
    // return a new list without the given id that will be deleted
    const newCardList = cardList.filter((obj) => {
      return obj.card.id !== id;
    })

    if (newCardList.length < cardList.length) {
      axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
        .then((response) => {
          setErrorMessage(`Card ${ id } deleted`);
          console.log(`Card with id: ${id} successfully deleted`)
        })
        .catch((error) => {
          setErrorMessage(`Unable to delete card ${ id }`);
          console.log(`unable to delete card with id: ${id}`)
        })
      setCardList(newCardList);
    }
  }

  const addCard = (card) => {
    axios.post(`${props.url}${props.boardName}/cards`, card)
      .then((response) => {
        const updatedCards = [...cardList, response.data]
        console.log("Card successfully added.");
        setCardList(updatedCards);
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage('Card could not be added');
        console.log(errorMessage);
      });
  }

  const cardComponents = cardList.map((obj) => {
    return (<Card key={obj.card.id} text={obj.card.text} emoji={obj.card.emoji} deleteCardCallback={deleteCard} id={obj.card.id} />
    );
  });

  return (
    <div className="board">
      <h2>{props.boardName}</h2>
      <NewCardForm addCardCallback={addCard} />
      {cardComponents}
    </div>
  )
};
Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string
};

export default Board;
