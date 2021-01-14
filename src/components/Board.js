import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

const Board = (props) => {

  const [cards, setCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);


  useEffect(() => {
    axios.get(`${props.url}${props.boardName}/cards`)
      .then((response) => {
        const apiCards = response.data;
        setCards(apiCards);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);
  
  const deleteCard = (id) => {
    
    const newCards = cards.filter((oneCard) => {
      return oneCard.card.id !== id;
    })

    if (newCards.length < cards.length) {
      axios.delete(`${props.cardUrl}${id}`)
      .then((response) => {
        setErrorMessage(`Card ${id} deleted!`)
      })
      .catch((error) => {
        setErrorMessage(`Unable to delete card #${id}`);
        console.log(errorMessage)
      })
      setCards(newCards);
    }
  }

  const addCard = (card) => {
    axios.post(`${props.url}${props.boardName}/cards`, card)
      .then( response => {
        const newCard = [...cards, response.data]
        setCards(newCard)
        setErrorMessage('')
      })
      .catch( error => {
        setErrorMessage(error.message)
      });
  };

  const cardComponents = cards.map(({card}) => {
    return(
    <Card key={card.id} 
    card={card} 
    deleteCardCallback={deleteCard}/>
    );
  });

  return (
    <div className="board">
      <NewCardForm onAddCallBack={addCard}/>
      {cardComponents}
    </div>
  )
};
Board.propTypes = {
  url: PropTypes.string.isRequired,
  cardUrl: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
