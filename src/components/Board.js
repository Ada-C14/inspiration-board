import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';
import NewCardFrom from './NewCardForm';


const Board = (props) => {

  const [cardList, setCardList] = useState([]);

  // populates board with cards when component first mounts
  useEffect(() => {
    axios.get(props.boardUrl + props.boardName + '/cards')
      .then( (response) => {
        //successful response
        console.log(response.data);
        setCardList(response.data);
      })
      .catch((error) => {
        // console.log(error)
      });
  }, []);


  const deleteCard = (id) => {
    axios.delete(props.cardUrl + id)
      .then( () => {
        axios.get(props.boardUrl + props.boardName + '/cards')
          .then( (response) => {
            //successful response
            setCardList(response.data);
          })
          .catch((error) => {
            // console.log(error)
          });
      })
      .catch( (error) => {
        // console.log(error);
      })
  }

  const addCard = (card) => {
    console.log(card)
    console.log(props.boardUrl + props.boardName + '/cards')
    axios.post(props.boardUrl + props.boardName + '/cards', {...card})
    
      .then( (response) => {
        axios.get(props.boardUrl + props.boardName + '/cards')
        .then( (response) => {
          //successful response
          setCardList(response.data);
        })
        .catch((error) => {
          // console.log(error)
        });
        
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // using and incrementer in map not the best way to add a key??
  const cardComponents = cardList.map ((element) => {
    return (
      <Card card={element.card} key={element.card.id} deleteCallback={deleteCard} />
    )
  })
  return (
    <div>
      <NewCardFrom addCardCallback={addCard} />
      <div className="board">
        {cardComponents}
      </div>
    </div>
  )
};
Board.propTypes = {

};

export default Board;
