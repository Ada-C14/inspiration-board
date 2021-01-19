import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const Board = (props) => {
  // A toggle to force refreshes of board
  const [refresh, setRefresh] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const refreshPage = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    axios.get(props.url + props.boardName + '/cards')
      .then((response) => {
        setCardData(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      })
  }, [refresh]);

  const addCard = (formFields) => {
    console.log(JSON.stringify(formFields));
    console.log(props.url + props.boardName + '/cards')
    axios.post(props.url + props.boardName + '/cards', JSON.stringify(formFields), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        refreshPage();
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error);
      })
  };

  const deleteCard = (id) => {
    axios.delete('https://inspiration-board.herokuapp.com/cards/' + id.toString())
      .then((response) => {
        refreshPage();
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      })
  };

  const cardList = cardData.map((card, i) => {
    if (!card.card.text) {
      card.card.text = '';
    }

    if (!card.card.emoji) {
      card.card.emoji = '';
    }

    return(
      <li key={i}>
        <Card id={card.card.id} text={card.card.text} emoji={card.card.emoji} onDeleteCallback={deleteCard}></Card>
      </li>
    )
  });

  return (
    <main className="board">
      { errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : '' }

      {cardList}
      <br />
    <NewCardForm onAddCallback={addCard}/>

    </main>
  )
};
Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Board;
