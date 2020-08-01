import React from 'react';
import './App.css';
import Game from './flashcardgame';
import ModuloGame from './moduloflashcards';

function App() {
  return (
    <div>
      <Game />
      <hr />
      <ModuloGame />
    </div>
  );
}

export default App;
