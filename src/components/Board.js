import React,{ useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = ({url, boardName, deleteCardCallback}) => {
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
    axios.get(`${url}/boards/${boardName}/cards`)
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
        } else {
          setCards(apiCards);
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message)
      });
  }, []);


  const deleteCard = (cardId) => {
    const revisedCards = cards.filter ((card) => { return card.id !== cardId });
    axios.delete(`${url}/cards/${cardId}`)
      .then((response) => {
        console.log(`Card ${cardId} was successfully deleted.`)
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(`An error occurred and card ${cardId} was not deleted.`)
        console.log(error.message)
      })
    setCards(revisedCards);
  }

  const loadBoard = () => {
    return cards.map((card) => {
      // if (card.id > nextID) {
      //   incrementID();
      // }

      // if (!card.id) {
      //   card.id = nextID;
      //   setNextId(nextID + 1);
      // }

      return <Card text={card.text} emojiName={card.emoji} id={card.id} key={card.id || nextID} deleteCardCallback={deleteCard} />
    })
  }


  return (
    <div>
      {loadBoard()}
    </div>
  )
};

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
  deleteCardCallback: PropTypes.func.isRequired,
};

export default Board;
