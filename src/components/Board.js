import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {

  const API_URL_BASE = `${props.url}${props.boardName}/cards`
  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const getCards = useCallback(() => {
    
    axios.get(API_URL_BASE)
    .then((response) => {
        console.log(response)

        //convert from array of card data to array of individual fields
        const result = response.data.map( (arrayElement) => {
          return arrayElement.card
        })

        setCardList(result)
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  },[API_URL_BASE])

  const deleteFunction = (cardID) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${cardID}`)
        .then((response) => {
        getCards()
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
  }

  const addCard = (card) => {
    axios.post(`https://inspiration-board.herokuapp.com/boards/Alice-D/cards?text=${card.text}&emoji=${card.emoji}`)
    .then((response) => {
      getCards()
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  }

  useEffect(() => {
     getCards()
    }, [getCards]);

  const boardCards = cardList.map((card) => {
    return (
        <Card text={card.text} key={card.id} emoji={card.emoji} deleteFunction={deleteFunction} id={card.id}/>
        )
  })


  return (
    <div className="board">
      <NewCardForm addCard={addCard} />
      {boardCards}
    </div>
  )
};
Board.propTypes = {

};

export default Board;

