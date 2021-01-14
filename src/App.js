import React, {useState,useEffect} from 'react';
import './App.css';
import Board from './components/Board';
import emoji from 'emoji-dictionary';
import axios from 'axios';



const App = () => {

  const [boardList, setBoardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null)
  const [currentBoard, setCurrentBoard] = useState('tram-bui')

  useEffect(() => {
    axios.get('https://inspiration-board.herokuapp.com/boards')
      .then((res) => {
        // res.data = array of objects
        const apiBoards = []
        
        res.data.map(singleBoard => {
          apiBoards.push(singleBoard.board)
        })
       
        setBoardList(apiBoards)
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  }, []);

  const boardNames = [];
  boardList.map(board => 
    boardNames.push(<option value={board.name}> {board.name} </option>)
  )

  const switchBoard = (event) => {
    event.preventDefault();

    setCurrentBoard(event.target.value)
  }

  useEffect(() => {

  }, [currentBoard])


  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text"> Inspiration Board</span></h1>
      </header>
      <form className='new-board'>
        <label>Current Board:</label>
        <select value={currentBoard} onChange={switchBoard}>
          {boardNames}
        </select>
      </form>
      <Board
        url="https://inspiration-board.herokuapp.com/boards/"
        boardName={currentBoard}
      />
    </section>
  );
};

export default App;
