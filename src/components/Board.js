import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

// const dummyCards = [
//   {
//       "card": {
//           "id": 2717,
//           "text": "100",
//           "emoji": '100'
//       }
//   },
//   {
//       "card": {
//           "id": 2718,
//           "text": "BE EXCELLENT TO EACHOTHER",
//           "emoji": null
//       }
//   },
//   {
//       "card": {
//           "id": 2719,
//           "text": "BREATHE",
//           "emoji": null
//       }
//   }]




const Board = (props) => {
  // const finalCards = generateBoard(dummyCards);
 

  

  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const fullUrl = `${props.url}${props.boardName}/cards`;
  console.log(fullUrl);

  useEffect(() => {
    axios.get(fullUrl)
    .then((response) => {
      const apiCardList = response.data;
      setCardList(apiCardList)
    })
    .catch((error) => {
      setErrorMessage(error.message);
      console.log(error.message);
    })
  }, [])

  const generateCards = cardList.map( (card) =>
    {return (<Card key={card.card.id} card={card.card}/>)}
  );


  return (
    <div className="board">
      {generateCards || errorMessage}
    </div>
  )
};
Board.propTypes = {
  

};

export default Board;
