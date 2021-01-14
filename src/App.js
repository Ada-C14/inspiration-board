import React from 'react';
import './App.css';
import Board from './components/Board';
import emoji from 'emoji-dictionary';

const App = () => {
  const emoji = require("emoji-dictionary");
  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">Inspiration Board{emoji.getUnicode("heart_eyes")}</span></h1>
      </header>
      <Board
        url="https://inspiration-board.herokuapp.com/boards/"
        boardName={`mona`}
      />
    </section>
  );
};

export default App;
