import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';
import NewCardFrom from './NewCardForm';


const Board = (props) => {

  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  // populates board with cards when component first mounts
  useEffect(() => {
    axios.get(props.boardUrl + props.boardName + '/cards')
      .then( (response) => {
        //successful response
        setCardList(response.data);
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);


  const deleteCard = (id) => {
    
    const newCardList = cardList.filter((element) => {
      return element.card.id !== id;
    });

    if (newCardList.length < cardList.length) {
      axios.delete(props.cardUrl + id)
        .then( (response) => {
          setErrorMessage(`card ${id} deleted`);
          setCardList(newCardList);
        })
        .catch( (error) => {
          setErrorMessage(`Unable to delete card ${id}`)
        });
    }
  }

  const addCard = (card) => {
    axios.post(props.boardUrl + props.boardName + '/cards', {...card})
    
      .then( (response) => {
        const updatedCards = [response.data, ...cardList];
        setCardList(updatedCards)
        
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
  }

  // using and incrementer in map not the best way to add a key??
  const cardComponents = cardList.map ((element) => {
    return (
      <Card card={element.card} key={element.card.id} deleteCallback={deleteCard} />
    )
  })
  return (
    <div>
      {errorMessage ? <div><h2 className="validation-errors-display">{errorMessage}</h2></div> : ''}
      <NewCardFrom addCardCallback={addCard} />
      <div className="board">
        {cardComponents}
      </div>
    </div>
  )
};
Board.propTypes = {
  boardUrl: PropTypes.string.isRequired,
  cardUrl: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
