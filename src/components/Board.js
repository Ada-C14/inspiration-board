import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

const Board = (props) => {
  // const boardComponents = CARD_DATA.cards.map((card, i) => {
  //   return (
  //     <li key={i}>
  //       <Card 
  //         text={card.text} 
  //         emoji={card.emoji} 
  //       />
  //     </li>
  //   );
  // });

  const [cards, setCards] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    axios.get(props.url)
    .then((response) => {
      const allCards = response.data
      setCards(allCards)
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  }, []);

  const cardList = cards.map((card) => {
    return (
      <Card key={card.card.id} card={card.card} />
    )
  });

  return (
    <div>
      { cardList }
    </div>
  )
};
Board.propTypes = {

};

export default Board;
