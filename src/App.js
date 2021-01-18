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
        boardUrl="https://inspiration-board.herokuapp.com/boards/"
        cardUrl="https://inspiration-board.herokuapp.com/cards/"
        boardName={`jasmine-y-lopez`}
      />
    </section>
  );
};

export default App;
