import React from 'react';
import './App.css';
import Board from './components/Board';
import axios from 'axios';


// const API_URL = "https://inspiration-board.herokuapp.com/boards/"

const App = () => {
  // const [cardlist, setCardList] = useState([]);
  // const [errorMessage, setErrorMessage] = useState(null);

  // useEffect = (() => {
  //   axios.get(`${API_URL}/${boardName}`)
  //   .then((response) => {
  //     const apiCardList = response.data
  //     setCardList(apiCardList);
  //   })
  //   .catch((error) => {
  //     setErrorMessage(error.message);
  //     console.log(error.message);
  //   })
  // }, []);

  const updateBoard = (updatedBoard) => {
    const cards = [];

    cardlist.forEach((card) => {
      if (card.text === updatedBoard.text) {
        cards.push(updatedBoard)
      }
      else 
      cards.push(card)
    });
    
    setCardList(cards);
  };
  
  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
      </header>
      {/* {errorMessage ? <div className='error-msg'>{errorMessage}</div> : ''} */}
      <Board
        url="https://inspiration-board.herokuapp.com/boards/"
        boardName={`emirry`}
        onUpdateCardBoard={updateBoard}
      />
    </section>
  );
};

export default App;
