import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {

  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(props.url + props.boardName + '/cards')
      .then((response) => {
        // Get the list of cards
        const apiCardList = response.data;
        // Set the state
        setCardList(apiCardList);
      })
      .catch((error) => {
        setErrorMessage(error.message)
      });
  }, []);

  // const updateCard = (updatedCard) => {
  //   const cards = [];

  //   cardList.forEach((card) => {
  //     if (card.id === updatedCard.id) {
  //       cards.push(updatedCard);
  //     } else {
  //       cards.push(card);
  //     }
  //   });

  //   setCardList(cards);
  // }


  const deleteCard = (id) => {
    const newCardList = cardList.filter((obj) => {
      return obj.card.id !== id;
    });

    if (newCardList.length < cardList.length) {
      axios.delete(`https://inspiration-board.herokuapp.com/cards/${ id }`)
        .then((response) => {
          setErrorMessage(`Card ${ id } deleted`);
        })
        .catch((error) => {
          setErrorMessage(`Unable to delete card ${ id }`);
        })
      setCardList(newCardList);
    }
  }

  const addCard = (card) => {
    axios.post(props.url + props.boardName + '/cards', card)
      .then((response) => {
        // What should we do when we know the post request worked?
        const updatedData = [...cardList, response.data];
        setCardList(updatedData);
        setErrorMessage(`Card ${ card.text} ${card.emoji } added`);
      })
      .catch((error) => {
        // What should we do when we know the post request failed?
        setErrorMessage(error.message);
      });
  }

  // return (
  //   <div className="board">
  //     {errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : ''}
  //     {/* <CardCollection cards={cardList} onUpdateCard={updateCard} /> */}
  //     <NewCardForm addCardCallback={addCard} />
  //   </div>

  const boardComponents = cardList.map((obj) => {
    return (
      <div className="board">
        <Card key={obj.card.id}
          text={obj.card.text}
          emoji={obj.card.emoji}
          id={obj.card.id}
          deleteCardCallback={deleteCard}
        />
      </div>
    )
  });

  return (
    <div>
      {errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : ''}
      <NewCardForm addCardCallback={addCard}/>
      {boardComponents}
    </div>
  )
}

  

Board.propTypes = {

};

export default Board;
