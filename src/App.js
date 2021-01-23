import React, {useState} from 'react';
import './App.css';
import Board from './components/Board';

const App = () => {
  
  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
      </header>
      <Board
        url="https://inspiration-board.herokuapp.com/boards/"
        boardName={`Alice-D`}
      />
    </section>
  );
};

export default App;

// for the create a new card
// similar to users submisison form in exquisite react
// collect text
// collect emoji as a form
// use that to issue a post request
// reload the cards
