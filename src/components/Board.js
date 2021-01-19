import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

const Board = (props) => {

  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(props.url + props.boardName + '/cards')
      .then((response) => {
        // Get the list of cards
        const apiCardList = response.data;
        // Set the state
        setCardList(apiCardList);
      })
      .catch((error) => {
        setErrorMessage(error.message)
      });
  }, []);

  const deleteCard = (id) => {
    const newCardList = cardList.filter((obj) => {
      return obj.card.id !== id;
    });

    if (newCardList.length < cardList.length) {
      axios.delete(`https://inspiration-board.herokuapp.com/cards/${ id }`)
        .then((response) => {
          setErrorMessage(`Card ${ id } deleted`);
        })
        .catch((error) => {
          setErrorMessage(`Unable to delete card ${ id }`);
        })
      setCardList(newCardList);
    }
  }

  const addCard = (card) => {
    axios.post(props.url + props.boardName + '/cards', card)
      .then((response) => {
        // What should we do when we know the post request worked?
        const updatedData = [...cardList, response.data];
        setCardList(updatedData);
        setErrorMessage(`Card ${ card.text} ${card.emoji } added`);
      })
      .catch((error) => {
        // What should we do when we know the post request failed?
        setErrorMessage(error.message);
      });
  }

  const boardComponents = cardList.map((obj) => {
    return (
      <div key={obj.card.id}> 
        <Card
          text={obj.card.text}
          emoji={obj.card.emoji}
          id={obj.card.id}
          deleteCardCallback={deleteCard}
        />
      </div>
    )
  });

  return (
    <div className="board">
      {errorMessage ? <div><h2 className="validation-errors-display">{errorMessage}</h2></div> : ''}
      <NewCardForm addCardCallback={addCard}/>
      {boardComponents}
    </div>
  )
}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
