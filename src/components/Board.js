import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {
  // const boardCards = CARD_DATA.cards.map((card, i) => {
  //   return (
  //       <Card text={card.text} key={i}/>
  //   )
  // })

  // ada-students start of code
  const API_URL_BASE = `${props.url}${props.boardName}/cards`
  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  
  useEffect(() => {
      axios.get(API_URL_BASE)
        .then((response) => {
          // do something here

        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }, []);  
  
  
  // ada-students end of code


  return (
    <div>
      {cardList}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
