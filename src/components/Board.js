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

  useEffect(() => {
     getCards()
    }, [getCards]);

  const boardCards = cardList.map((card) => {
    return (
        <Card text={card.text} key={card.id} emoji={card.emoji} deleteFunction={deleteFunction} id={card.id}/>
    )
  })

  return (
    <div>
      {boardCards}
    </div>
  )
};
Board.propTypes = {

};

export default Board;

// function in app should receive card id
// and use that id to issue a request to delete the card
// reload the cards
// pass down a function to the card.js to tell card which card to delete

// a button on each card
// passed down the function to card (using props),
// that each card can use when clicking on that button


// for the create a new card
// similar to users submisison form in exquisite react
// collect text
// collect emoji as a form
// use that to issue a post request
// reload the cards
