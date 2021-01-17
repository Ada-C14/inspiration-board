import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';


const Board = (props) => {
  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

 
  useEffect(() => {
    console.log(`${props.url}${props.boardName}/cards`)
    axios.get(`${props.url}${props.boardName}/cards`)
      .then((response) => {
        // Get the list of cards
        // console.log(response.data)

        const apiCardList = response.data;
        // Set the state
        setCardList(apiCardList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        // console.log(error.message);
        // console.log(error.response);

      });
  }, []);


  const addCard = (card) => {
    axios.post(`${props.url}`, card)
      .then((response) => {
        // What should we do when we know the post request worked?
        const updatedData = [...cardList, response.data];
        setCardList(updatedData);
        setErrorMessage('');
      })
      .catch((error) => {
        // What should we do when we know the post request failed?
        setErrorMessage(error.message);
      });
  };

  // const deleteCard = (card) => {
  //   axios.delete(`${props.url}`, card)
  //   .then((response) =>  {
  //     const updateData = [...cardList, response.data];
  //     setCardList(updatedData);
  //   })
  //   .catch ((error) => {
  //     setErrorMessage(error.message);
  //   })
  // };
  const renderCard = cardList.map((card) => {
    console.log(card)
    return (
      <Card 
        key={card.card.id}
        id={card.card.id}
        text={card.card.text}
        emojis={card.card.emoji}
        />
    )})
// console.log(cardList)
// <button
// onClick={() => props.deleteStudentCallback(props.id)}
// className="delete-btn"
// >
// Delete
// </button>
  return (
    <div>

      {renderCard}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
