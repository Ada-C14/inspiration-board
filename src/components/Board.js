import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

const Board = (props) => {

  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(props.boardUrl + props.boardName + '/cards')
      .then((response) => {
        setCardList(response.data.map(card => card.card));
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  const addCard = (card) => {
    axios.post(props.boardUrl + props.boardName + '/cards', {...card})
      .then((response) => {
        const updatedCard = [...cardList, response.data.card];
        setCardList(updatedCard);
        setErrorMessage('Card successfully added to board!');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
  };

  const cardComponents = cardList.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        text={card.text}
        emoji={card.emoji}
      />
    );
  });

  return (
    <div>
      { errorMessage ? <div><h2 className="validation-errors-display">{errorMessage}</h2></div> : '' }
      <NewCardForm addCardCallback={addCard}/>
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
