import React from 'react';
import './App.css';
import Board from './components/Board';

const App = () => {

  const BOARD_NAME = "/boards/stacy"
  const API_URL = "https://inspiration-board.herokuapp.com"

  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
      </header>
      <Board
        url={API_URL}
        boardName={BOARD_NAME}
      />
    </section>
  );
};

export default App;
