import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const generateCardComponents = (cards) => {
  return cards.map(card => {
    return (
      <Card key={ card.id } card={ card } />
    )
  });
}

const Board = ({ boardName, url }) => {
  const [cards, setCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    axios.get(`${url}${boardName}/cards`)
      .then((response) => {
        const responseCards = response.data.map(({ card }) => card);
        setCards(responseCards);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.error(error.message);
      });
  }, []);

  const cardComponents = generateCardComponents(cards);

  return (
    <div>
      { errorMessage || cardComponents }
    </div>
  )
};
Board.propTypes = {
  boardName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Board;
