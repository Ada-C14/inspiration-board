import React,{ useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = ({url, boardName}) => {
  const [cards, setCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [nextID, setNextId] = useState(-1);

  const incrementID = () => {
    const nextId = cards.reduce((accumulator, card) => {
      return Math.max(accumulator, card.id);
    }, 0) + 1;
    setNextId(nextID);
  }

  //load board
  useEffect(() => {
    axios.get(`${url}/${boardName}/cards`)
      .then((response) => {
        const apiCards = response.data.map((apiCard) => { 
          return {
            id: apiCard['card']['id'], 
            emoji: apiCard['card']['emoji'],
            text: apiCard['card']['text'],
          }
        });

        console.log(apiCards)
        if (apiCards.length === 0) {
          setCards(CARD_DATA['cards'])
          console.log(CARD_DATA['cards'])
        } else {
          setCards(apiCards);
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message)
      });
  }, []);

  const loadBoard = () => {
    // return  <Card id='1' text='test' emojiName='beer'/>
    return cards.map((card) => {
      // console.log(card.text);
      console.log(card.emoji);
      return <Card text={card.text} emojiName={card.emoji} id={card.id || nextID} key={card.id || nextID} />
    })
  }

  return (
    <div>
      {/* <Card id='1' text='test' emojiName='beer'/> */}
      {loadBoard()}
    </div>
  )
};

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
