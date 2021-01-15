import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const Board = (props) => {
  const [cards, setCards] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    axios.get(props.url)
    .then((response) => {
      const allCards = response.data
      setCards(allCards)
    })
    .catch((error) => {setErrorMessage(error.message);});
  }, []);


  


  const displayCards = cards.map((card) => {
    return (
      <Card key={card.card.id} card={card.card} />
    )
  });

  return (
    <div>
      {displayCards}
    </div>
  )

  
};
Board.propTypes = {
  
};

export default Board;
