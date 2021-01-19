import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';


const Board = props => {
  const BOARD_API_URL_BASE = props.url + 'boards/';
  const CARDS_API_URL_BASE = props.url + 'cards/';
  
  const [cardList, setCardList] = useState([]);
  const [studentBoards, setStudentBoards] = useState([]);
  const [alert, setAlert] = useState(null);
  const [currentBoard, setCurrentBoard] = useState(props.boardName);

  useEffect(() => {
    axios.get(BOARD_API_URL_BASE)
      .then((response) => {
        setStudentBoards(response.data.map(board => board.board.name));
      })
      .catch((error) => {
        setAlert(error.message);
      })
  }, []);

  useEffect(() => {
    axios.get(BOARD_API_URL_BASE + currentBoard + '/cards')
      .then((response) => {
        const apiCardList = response.data.map(card => card.card);
        setCardList(apiCardList);
        setAlert(null);
      })
      .catch((error) => {
        setAlert(error.message);
      })
  }, [currentBoard]);

  const deleteCard = id => {
    const newCardList = cardList.filter((card) => {
      return card.id !== id;
    });

    if (newCardList.length < cardList.length) {
      axios.delete(CARDS_API_URL_BASE + id)
        .then((response) => {
          setAlert(`Card #${id} successfully deleted from ${ currentBoard }'s board.`);
          setCardList(newCardList);
        })
        .catch((error) => {
          setAlert(`Failed to delete card #${id}.`);
        })
    }
  };

  const addCard = (newCard, targetBoard) => {
    axios.post(BOARD_API_URL_BASE + targetBoard + '/cards', newCard)
      .then((response) => {
        if (targetBoard === currentBoard) {
          const newCardList = [...cardList, response.data.card];
          setCardList(newCardList);
        }
        setAlert(`Successfully added new inspo card to ${ targetBoard }'s board!`);
      })
      .catch((error) => {
        setAlert(error.message);
      })
  };

  const generateCardComponents = cards => {
    const currentCardList = [];
  
    for (let card of cards) {
      currentCardList.push(
        <Card 
          key={card.id}  
          id={card.id} 
          optionalText={card.text} 
          optionalEmoji={card.emoji} 
          deleteCardCallback={deleteCard}
        />
      )
    }
  
    return currentCardList;
  };

  const onInputChange = event => {
    setCurrentBoard(event.target.value);
  };

  return (
    <div className='board-container'>
      <div className='board-container__nav'>
        <span>Current board:</span>
        <select name='studentBoard' onChange={onInputChange}>
          <option value='' disabled selected>{ currentBoard }</option>
          { studentBoards.map((boardName, index) => <option key={index}>{ boardName }</option>) }
        </select>
      </div>
      <div className='board-container__left-side'>
        <h1 className="header__h1">
          <span>inspo </span>
          <span className='header__text--stroke'>board</span>
        </h1>
        { alert 
          ? <div className='alert-display'>
            <span>{ alert }</span>
          </div> 
          : ''
        }
        <NewCardForm addCardCallback={addCard} currentBoard={currentBoard} studentBoards={studentBoards} />
      </div>
      <div className='board-container__content'>
        <div className="board-container__content__cards">
          { generateCardComponents(cardList) }
        </div>
      </div>
    </div>
  )
};

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
