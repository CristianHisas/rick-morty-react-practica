import RickMortyImg from './img/rick-morty.png';
import './App.css';
import React, { useState } from 'react';
import Characters from './Components/Characters';
import getApiRequest from './Functions/getApiRequest';

function App() {
  const [characters, setCharacters] = useState(null);
  
  const handlerApiRequest = async () => {
    const response = await getApiRequest("https://rickandmortyapi.com/api/character");
    response.loading && response.error == null ? setCharacters(response.data) : console.log(response.error);
  }

  return (
      <>
      <h1 className="title">Rick & Morty</h1>
      {characters ? 
        (
          <>
          <Characters 
            pagination={characters.info} 
            characters={characters.results} 
            setCharacters={setCharacters}
          />
          </>
        ) :
        (
          <>
          <img src={ RickMortyImg } alt="Rick & Morty" className="img-home"/>
          <button onClick={handlerApiRequest} className="btn-search">Buscar Personajes</button>        
          </>
        )}
      </>
  );
}

export default App;
