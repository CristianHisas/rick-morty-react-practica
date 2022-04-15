import RickMortyImg from './img/rick-morty.png';
import './App.css';
import React, { useState } from 'react';
import Characters from './Components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  // Request api de rick and morty
  const reqApi = async (page = 0) => {
    const api = await fetch("https://rickandmortyapi.com/api/character/?page="+page);
    const character_api = await api.json();
    setCharacters(character_api);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? 
          (<Characters reqApi={reqApi} pagination={characters.info} characters={characters.results} setCharacters={setCharacters}/>) :
          (
            <>
            <img src={ RickMortyImg } alt="Rick & Morty" className="img-home"/>
            <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
            </>
          )}
      </header>
    </div>
  );
}

export default App;
