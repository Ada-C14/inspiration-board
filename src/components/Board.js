import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const listCards = (cards, deleteCard) => {
    return (cards.map((cardHolder) => {
        return(
          <Card text={cardHolder.card['text']} emojiString={cardHolder.card['emoji']} id={cardHolder.card['id']} deleteCardCallback={deleteCard} key={cardHolder.card['id']}/>
        )
    }))
};


const Board = ({url, boardName}) => {

  const [cards, setCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);

  useEffect(() => {
    axios.get(url + 'boards/' + boardName + '/cards')
    .then((response) => {
      const apiCards = response.data;
      setCards(apiCards);

    })
    .catch((error) => {
      setErrorMessage(error.message)
    })
  }, [url, boardName]);


  const deleteCard = (id) => {
    const newCardList = cards.filter((cardHolder) => {
      return cardHolder.card['id'] !== id;
    });
  
    if (newCardList.length < cards.length){
      axios.delete(url + '/cards/' + id)
      .then((response) => {
        setErrorMessage(`Card ${id} deleted`)
      })
      .catch((error) => {
        setErrorMessage(`Card ${id} not deleted`)
      })
      setCards(newCardList);
    }
  }

  const addNewCard = (card) => {
    axios.post(url + 'boards/' + boardName + '/cards', card)
    .then((response) => {
      console.log(response.data)
      const newCardList = [...cards, response.data]
      setCards(newCardList)
      setErrorMessage('Card Added!')
    })
    .catch((error) => {
      setErrorMessage(error.message)
    })



  }

  return (
    <div className="board">
      <NewCardForm sendCard={addNewCard} />
      {errorMessage ? <div><h2>{errorMessage}</h2></div> : ''}
      {listCards(cards, deleteCard)}    
    </div>
  )
}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired

};

export default Board;
