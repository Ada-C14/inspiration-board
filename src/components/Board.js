import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';


const Board = (props) => {
  const cardsURL = `${props.url}${props.boardName}/cards`
  const [cards, setCards] = useState([])
  const [errorMessage, setErrorMessage] = useState(null);
  const [result, setResult] = useState(null);
  
  const deleteCard = (id) => {
    if(!id){
      setErrorMessage('ID does not exist')
    } else {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
    .then((response) => {
        setCards(cards.filter(card => id !== card.id))
        }
      )
    .catch((error) => {
      setErrorMessage(`${error.message}, failed to remove: ${id}`);
    })}
  }


  const addCard = (newCard) => {
    
    axios.post(cardsURL, newCard)
      .then((response) => {
        // What should we do when we know the post request worked?
        const updatedData = [...cards, response.data.card];
        setCards(updatedData);
        setErrorMessage('');
      })
      .catch((error) => {
        // What should we do when we know the post request failed?
        setErrorMessage(error.message);
      });
  }

  useEffect(() => {
    axios.get(cardsURL)
      .then((response) => {
        // Get the list of cards
        const apiCards = response.data;

        // Set the state
        setCards(apiCards.map( cardContainer => {
          return cardContainer.card
        }))
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  }, []);

  const cardComponents = cards.map((card, i) => {
    return (<Card idx = {i} id = {card.id} text = {card.text} emoji = {card.emoji} deleteCard = {deleteCard}/>)
  });

  return (
    <div className = 'board'>
      {cardComponents}
      <NewCardForm addCard = {addCard}/>
    </div>
  )

};
Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
