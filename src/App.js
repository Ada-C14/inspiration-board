import React from 'react';
import './App.css';
import Board from './components/Board';

const App = () => {  
  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
      </header>
      {/* {errorMessage ? <div className='error-msg'>{errorMessage}</div> : ''} */}
      <Board
        url="https://inspiration-board.herokuapp.com/boards/"
        boardName={`emirry`}
      />
    </section>
  );
};

export default App;
