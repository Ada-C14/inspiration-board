import React ,{useState, useEffect}from 'react';
import './App.css';
import Board from './components/Board';
import NewCardForm from './components/NewCardForm';
import axios from 'axios';

const App = () => {
  const [cards, setCards] = useState([]);
  const [newcard, setNewCard] = useState({ text: "HARD CODE", emoji: "EMOJI" });

  const board = `Victory-Anaconda`;
  const url = "https://inspiration-board.herokuapp.com";

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = () => {
    axios.get(url + "/boards/" + board + "/cards")
    .then( (response) => {
      setCards(response.data);
    })
    .catch((error) => {
      console.log(`ERROR: ${error}`)
    });
  }

  
  const deleteCard=(deletedcard)=>{
    const cardsupdated = [];

    cards.forEach((card)=>{
      if(card.card.id.toString() === deletedcard.target.id.toString()){
        axios.delete(url + '/cards/' + deletedcard.target.id)
        .then( (response) => {
          console.log(`SUCCESSFUL DELETION`)
        })
        .catch((error) => {
          console.log(`ERROR could not delete: ${error}`)
        });
      } else { cardsupdated.push(card); }
    });

    setCards(cardsupdated);
  };

  const onInputChange = (event) =>{    

    const newSubmitCard = {...newcard};
    newSubmitCard[event.target.name] = event.target.value;
    setNewCard(newSubmitCard);

  };

  const addCard = (event) => {
    event.preventDefault();
    console.log(`we are adding new card: ${JSON.stringify(newcard)} `)
    axios.post(url + `/boards/${board}/cards/?text=${newcard.text}&emoji=${newcard.emoji}` )
        .then( (response) => {
          console.log(`SUCCESSFUL POSTING OF NEW CARD`)
          fetchCards();
        })
        .catch((error) => {
          console.log(`ERROR could not post new card: ${error}`)
        });

  }


  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
      </header>
      <NewCardForm onChangeCard={onInputChange} onSubmitCard={addCard}/>
      <Board cards={cards} deleteCard={deleteCard} />
    </section>
  );
};

export default App;
