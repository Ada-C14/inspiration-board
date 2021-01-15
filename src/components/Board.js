import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = ({url, boardName}) => {
  const [cardList, setCardList] = useState([]);
  const [error, setError] = useState('');

  // const cards = CARD_DATA.cards.map((card) => {
  //   return <Card text={ card.text } emoji={ card.emoji } />
  // })
  

  useEffect(() => {
    axios.get(`${url}${boardName}/cards`)
      .then((response) => {
        const fetchCards = [];
        response.data.forEach((hash) => {
          fetchCards.push(hash.card);
        });
        setCardList(fetchCards);
        setError('');
      })
      .catch((error) => {
        // TODO: how to access the "cause" field that gets returned in Postman
        setError(error.message);
      })
  }, []);

  const cardComponents = cardList.map((hash) => {
    return <Card text={ hash.text } emoji={ hash.emoji } />
  });

  return (
    <div className="board">
      {/* TODO - why does CSS class not apply to error? */}
      { error ? <p className='validation-errors-display'>{error}</p> : null }
      { cardComponents }
    </div>
  )
};
Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
