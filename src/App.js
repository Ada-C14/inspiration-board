import React from 'react';
import './App.css';
import Board from './components/Board';

const App = () => {
  return (
    <section>
      <Board
        url="https://inspiration-board.herokuapp.com/"
        boardName='anna-kim'
      />
    </section>
  );
};

export default App;
