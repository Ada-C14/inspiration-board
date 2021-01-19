import React from 'react';
import './App.css';
import Board from './components/Board';
import NewCardForm from './components/NewCardForm'

const App = () => {
  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
      </header>
      <Board
        url="https://inspiration-board.herokuapp.com/boards/"
        boardName={`wiggle`}
      />
    </section>
  );
};

export default App;
