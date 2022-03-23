import RickMortyImg from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './Components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  // Request api de rick and morty
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const character_api = await api.json();
    setCharacters(character_api.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? 
          (<Characters characters={characters} setCharacters={setCharacters}/>) :
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
