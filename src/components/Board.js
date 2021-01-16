import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';
import newCard from './NewCardForm';

const Board = (props) => {
  const [cardsList, setCardsList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(()=>{
    axios.get(props.url)
    .then((response) => {
      const apiCardsList = response.data;
      setCardsList(apiCardsList);
    })
    .catch((error)=>{
      setErrorMessage(error.message);
      console.log(error.message);
    });
  }, []);

  const deleteCard = ((id) => {
    const urlDeleteCard = `https://inspiration-board.herokuapp.com/cards/${id}`
    console.log(urlDeleteCard)
    axios.delete(urlDeleteCard)
    .then((response) => axios.get(props.url))
    .then(response => setCardsList(response.data))
    .catch((error) => {
      setErrorMessage(error.message);
      console.log(errorMessage)
    })
  })

  const addCard = ((card) => {
    const urlAddCard = `${props.url}`
    axios.post(urlAddCard, card)
    .then((response) => axios.get(props.url))
    .then(response => setCardsList(response.data))
    .catch((error) => {
      setErrorMessage(error.message);
      console.log(errorMessage)
    })
  })

  const renderCards = cardsList.map((card, i) => {
    return (
      <div>
      <Card id={card.card.id} text={card.card.text} emoji={card.card.emoji} onDelete={(id) => deleteCard(id)}/>
      
      </div>
    );
  });

  return(
    <div>
      <div><NewCardForm onAddCard={addCard}/></div>
      <div className='board'>
      { errorMessage ? <div><h2>{errorMessage}</h2></div> : '' }
      {renderCards}
      </div>
    </div>
  )


};

Board.propTypes = {
url: PropTypes.string.isRequired,
};

export default Board;