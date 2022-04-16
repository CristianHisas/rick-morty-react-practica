import ReactPaginate from "react-paginate";
import React from "react";
import getApiRequest from "../Functions/Functions.js";

function Characters(props) {

  const { characters, pagination, setCharacters } = props;

  const ResetCharacters = () => {
    setCharacters(null);
  }

  const handlePageChange = async (data) => {
    let page = data.selected + 1;
    const response = await getApiRequest("https://rickandmortyapi.com/api/character/?page="+page);
    response.loading && response.error == null ? setCharacters(response.data) : console.log(response.error);
  }

  const handlePageSearch = async (data) => {
    let value = data.currentTarget.value.toLowerCase();
    const response = await getApiRequest("https://rickandmortyapi.com/api/character/?name="+value);
    response.loading && response.error == null ? setCharacters(response.data) : console.log(response.error);
  }

  return (
    <div className="characters">
      <h1>Characters</h1>
      <div className="wrapper">
        <img className="search-icon" alt="" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
        <input onChange={handlePageSearch} className="search" placeholder="Search characters..." type="text"/>
      </div>  
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
                <span>{character.origin.name}</span>
                <br/>
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
