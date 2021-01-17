import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import "./Board.css";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import CARD_DATA from "../data/card-data.json";

const Board = (props) => {
  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    // console.log(`${props.url}${props.boardName}/cards`)
    axios
      .get(`${props.url}${props.boardName}/cards`)
      .then((response) => {
        // Get the list of cards
        // console.log(response.data)

        const apiCardList = response.data;
        // Set the state
        setCardList(apiCardList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        // console.log(error.message);
        // console.log(error.response);
      });
  }, []);

  const addCard = (card) => {
    axios
      .post(`${props.url}${props.boardName}/cards`, card)
      .then((response) => {
        // What should we do when we know the post request worked?
        const updatedData = [...cardList, response.data];
        setCardList(updatedData);
        setErrorMessage("");
      })
      .catch((error) => {
        // What should we do when we know the post request failed?
        setErrorMessage(error.message);
      });
  };

  const deleteStudent = (id) => {
    // console.log(id)
    const newCardList = cardList.filter((card) => {
      return card.card.id !== id;
    });

    if (newCardList.length < cardList.length) {
      axios
        .delete(`${props.url}/${id}`)
        .then((response) => {
          setErrorMessage(`Student ${id} deleted`);
        })
        .catch((error) => {
          setErrorMessage(`Unable to delete student ${id}`);
        });
      setCardList(newCardList);
    }
  };
  const renderCard = cardList.map((card) => {
    console.log(card);
    return (
      <Card
        key={card.card.id}
        id={card.card.id}
        text={card.card.text}
        emojis={card.card.emoji}
        deleteStudentCallback={deleteStudent}
      />
    );
  });
  // console.log(cardList)

  return (
    <div>
      <NewCardForm addCardCallback={addCard} />
      {renderCard}
    </div>
  );
};
Board.propTypes = {};

export default Board;
