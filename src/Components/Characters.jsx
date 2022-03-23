export default function Characters(props) {

  const { characters, setCharacters } = props;

  const ResetCharacters = () => {
    setCharacters(null);
  }

  return (
    <div className="characters">
      <h1>Characters</h1>
      <span className="back-home" onClick={ResetCharacters}>Back to home</span>
      <div className="container-characters">
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>{character.status === "Alive" ? (
                  <>
                  <span className="alive"></span>
                  </>
                ):(
                  <>
                  <span className="dead"></span>
                  </>
                )}
                {character.status} - {character.species}
              </h6>
              <p className="text-grey">
                <span>Episodes: </span>
                <span>{character.episode.length}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick={ResetCharacters}>Back to home</span>
    </div>
  )
}
