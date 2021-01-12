import React from 'react';
import './App.css';
import Board from './components/Board';

const App = () => {

  const BOARD_NAME = "stacy"
  const BOARD_URL = "https://inspiration-board.herokuapp.com/boards/"

  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
      </header>
      <Board
        url={BOARD_URL}
        boardName={BOARD_NAME}
      />
    </section>
  );
};

export default App;
