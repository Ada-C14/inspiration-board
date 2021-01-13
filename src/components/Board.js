/* eslint-disable no-lone-blocks */
import React,{ useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = ({url, boardName}) => {
  const [cards, setCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [nextId, setNextId] = useState(-1);

  const incrementId = () => {
    const id = cards.reduce((accumulator, card) => {
      return Math.max(accumulator, card.id);
    }, 0) + 1;
    setNextId(id);
    return id;
  }

  //load board
  useEffect(() => {
    axios.get(`${url}/boards/${boardName}/cards`)
      .then((response) => {
        const apiCards = response.data.map((apiCard) => { 
          return {
            id: apiCard['card']['id'], 
            emoji: apiCard['card']['emoji'],
            text: apiCard['card']['text'],
          }
        });

        if (apiCards.length === 0) {
          setCards(CARD_DATA['cards'])
        } else {
          setCards(apiCards);
        }

        incrementId();
        console.log(nextId)
      })
      .catch((error) => {
        const message = `An error occurred and board ${boardName} did not load. ${error.message}`
        setErrorMessage(message);
        console.log(message)
      });
  }, []);


  const deleteCardCallback = (cardId) => {
    const revisedCards = cards.filter ((card) => { return (card.id !== cardId)});

    axios.delete(`${url}/cards/${cardId}`)
      .then((response) => {
        console.log(`Card ${cardId} was successfully deleted.`)
      })
      .catch((error) => {
        const message = `An error occurred and card ${cardId} was not deleted. ${error.message}`
        setErrorMessage(message);
        console.log(message)
      })
    setCards(revisedCards);
  }

  const addNewCardCallback = (event,newCard) => {
    event.preventDefault();
    const apiCard = {
      text: newCard.text, emoji: newCard.emojiName}

    axios.post(`${url}/boards/${boardName}/cards`, apiCard)
      .then((response) => {
        setCards([...cards, newCard]);
        incrementId();
        setErrorMessage('');
      })
      .catch((error)=>{
        const message = `An error occurred and card was not added to board ${boardName}. ${error.message}`
        setErrorMessage(message);
        console.log(message)
      })
  }

  const loadBoard = () => {
    return cards.map((card) => {
      return <Card text={card.text} emojiName={card.emoji} id={card.id} key={card.text} deleteCard={deleteCardCallback} />
    })
  }

  return (
    <div>
      <div className='new-card-form'>
        <NewCardForm nextId={nextId} addNewCard={addNewCardCallback} />
      </div>
      <div className='board'>
        {loadBoard()}
      </div>
    </div>
  )
};

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
