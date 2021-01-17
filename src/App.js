import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import axios from "axios";

const App = () => {
  // const [selectedBoard, setSelectedBoard] = useState('ida')
  return (
    <section>
      <header className="header">
        <h1 className="header__h1">
          <span className="header__text">Inspiration Board</span>
        </h1>
      </header>
      <Board
        url="https://inspiration-board.herokuapp.com/boards/"
        boardName={"ida"}
      />
    </section>
  );
};

export default App;
