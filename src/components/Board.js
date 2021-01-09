import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {

  const [cardsList, setCardsList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  // useEffect to get cards
  useEffect(() => {
    axios.get(`${props.url}/${props.boardName}/cards`)
      .then( (response) => {
        // get list of cards
        const apiCardsList = response.data;
        setCardsList(apiCardsList);
      })
      .catch( (error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  },[]);

  // for hard-coded data
  const allCards = (cards) => {
    
    let cardsList = [];

    for(const card of cards) {
      cardsList.push(<Card text={card.card ? card.card.text : card.text} emojiText={card.card ? card.card.emoji : card.emoji}/>);
    }
    return cardsList;
  }

  // for error message
  const allErrors = (errorData) => {
    const errors = [];
    for(const error of errorData) {
      errors.push(<li>{error}</li>);
    }

    return errors;
  }

  return (
    <div className = 'board'>
      <section className = 'validation-errors-display'>
        <ul className = "validation-errors-display__list">
          {errorMessage ? allErrors(errorMessage) : ''}
        </ul> 
      </section>  
      {allCards(CARD_DATA.cards)}
    </div>
  )
};
Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
