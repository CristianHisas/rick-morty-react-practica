import ReactPaginate from "react-paginate";
import React from "react";

function Characters(props) {

  const { characters, setCharacters, pagination, reqApi } = props;

  const ResetCharacters = () => {
    setCharacters(null);
  }

  const handlePageChange = (data) => {
    let page = data.selected + 1;
    reqApi(page);
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
      <div>
        <ReactPaginate
          breakLabel = "..."
          nextLabel = "Next >"
          previousLabel = "< Previous"
          pageCount={pagination.pages}
          onPageChange={handlePageChange}
          containerClassName={"btn-pagination"}
          pageClassName={"page-item"}
          previousClassName={"page-item"}
          nextClassName={"page-item"}
          breakClassName={"page-item"}
          activeClassName={"page-active"}
        />
      </div>
    </div>
  )
}

export default Characters;
