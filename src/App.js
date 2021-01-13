import React, { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import axios from 'axios';

const App = () => {
  const API_BASE_URL = "https://inspiration-board.herokuapp.com/";
  
  const [boardList, setBoardList] = useState([]);
  const [currentBoard, setCurrentBoard] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(API_BASE_URL+"boards")
      .then( response => {
        setBoardList(response.data)
      })
      .catch( error => {
        setErrorMessage(error.message)
      });
  },[currentBoard]);


  const onSelectBoard = ((event) => {
    const boardId = event.target.value;

    const newCurrentBoard = boardList.find(({board}) => boardId == board.id); 

    setCurrentBoard(newCurrentBoard);
  });

  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
      </header>

      { errorMessage ? <div className="validation-errors-display">{errorMessage}</div> : null }

      <div className="current-board">
        <div className="board__select">
          <label htmlFor="currentBoard"><h2>Find a Board</h2></label>
          <select onChange={onSelectBoard} name="currentBoard" className="board__select">
            { boardList.map(({ board }) => 
              <option key={board.id} value={board.id}>{board.name}</option>
            )}
          </select>
        </div>

        { currentBoard ? <Board
                                url={API_BASE_URL}
                                boardName={currentBoard.board.name}
                                errorMessage={errorMessage}
                                setErrorMessage={setErrorMessage}
                              /> : null }
     </div>
    </section>
  );
};

export default App;
