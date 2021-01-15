import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {

  const [cards, setCards] = useState([])
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(`${props.url}${props.boardName}/cards`)
      .then( (response) => {
        const apiCards = response.data;
        setCards(apiCards);
      })
      .catch( (error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  }, []);

  const deleteCard = (id) => {

    const newCards = cards.filter((singleCard) => {
      return singleCard.card.id !== id;
    }) 

    if (newCards.length < cards.length) {
      axios.delete(`${props.url}${props.boardName}/cards/${id}`)
      .then((response) => {
        setErrorMessage(`Card ${id} was deleted!`);
      })
      .catch((error) => {
        setErrorMessage(`Unable to delete card #${id}`);
      })
      setCards(newCards);
    }
  }


  const cardComponents = cards.map(({card}) => {
    return (
      <Card text={card.text} emojiText={card.emoji} key={card.id} deleteCardCallback={deleteCard}/>
    )
  })
  return (
    <div className="board">
      { errorMessage ? <div className='validation-errors-display'>
          <ul className='validation-errors-display__list'>{ errorMessage }</ul>
          </div> : '' }
      {cardComponents}
    </div>
  )
};
Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
