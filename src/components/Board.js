import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';


const cardList = (cards, deleteCard) => {
  return (cards.map((card) => {
    return(
      <Card 
        key={card.id}
        id={card.id}
        text={card.text}
        emoji={card.emoji}
        deleteCardCallback={deleteCard}
        />
    )
}))
}

const Board = (props) => {

    const allCards = `${props.url}boards/${props.boardName}/cards`

    const [cards, setCards] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
  
    useEffect(() => {
      axios.get(allCards)
        .then((response) => {
          const apiCardList = response.data.map((element) => element.card);
          setCards(apiCardList);
        })
        .catch((error) => {
          setErrorMessage(error.message);
          console.log(error.message);
        });
    }, []);


    const addCard = ((newCard) => { // need to create NewCardForm

      axios.post(allCards, newCard)
        .then((response) => {
          const newCardList = [...cards, response.data.card]
          setCards(newCardList)
          setErrorMessage('Card successfully added')
        })
        .catch((error) => {
          setErrorMessage('Card not successfully added');
          // console.log(error.message);  
        });
    })

    const deleteCard = (id) => {
      
      const newCardList = cards.filter((card) => {
        return card.id !== id
      })

      if (newCardList.length < cards.length) {
        axios.delete(`${props.url}cards/${id}`)
          .then((response) => {
            setErrorMessage(`Card ${id} deleted`)
          })
          .catch((error) => {
            setErrorMessage(`Card ${id} not deleted`)
          })
          setCards(newCardList);
      }
    }


  return (
    <div>
      <NewCardForm addCardCallback={addCard}/>
      <br/>
      <div className="board">
        {cardList(cards, deleteCard)}
      </div>
    </div>
  )
  
};


Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
