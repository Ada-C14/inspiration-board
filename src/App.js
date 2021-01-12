import React from 'react';
import './App.css';
import Board from './components/Board';

const App = () => {
  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
      </header>
      <Board
        url="https://inspiration-board.herokuapp.com/"
        // two boards were accidentally created -- 'christabel' has a bazillion accidental stickies
        // boardName={`christabel`}
        boardName={`christabel-sebastian`}
      />
    </section>
  );
};

export default App;
