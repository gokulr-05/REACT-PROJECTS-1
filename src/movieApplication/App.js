import "./App.css";
import { useState, useEffect } from "react";
import MoviesList from "./Components/MoviesList";
function App() {
  let [searchText, setSearchText] = useState("");

  let [movies, setMovies] = useState([]);

  let [favoriteMovies, setFavouriteMovies] = useState([]);

  let SearchFunc = async (searchText) => {
    let url = `http://www.omdbapi.com/?s=${searchText}&apikey=79555010`;

    let response = await fetch(url);
    let responseData = await response.json();

    if (responseData.Search) {
      setMovies(responseData.Search);
    } else {
      console.log("No Data Found");
    }
  };

  useEffect(() => {
    SearchFunc(searchText);
  }, [searchText]);

  let AddfavouriteMovies = (movie) => {
    let favMov = [...favoriteMovies, movie];
    setFavouriteMovies(favMov);
  };

  return (
    <div className=" container-fluid ">
      <div className="row over-x d-flex align-items-center row justify-content-between">
        <div className="col-3 ">
          <h2 className=" text-uppercase text-danger">movies</h2>
        </div>

        <div className="col-3 ">
          <input
            className="form-control"
            placeholder="search.."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="row over-x mt-3 ">
        <MoviesList AddfavouriteMovies={AddfavouriteMovies} movies={movies} />
      </div>

      <div className="row mt-4">
        <div className="col">
          <h2 className="text-uppercase text-white">favourites</h2>
        </div>
      </div>
      <div className="row over-x">
        <div className="col d-flex align-items-center">
          <MoviesList
            AddfavouriteMovies={AddfavouriteMovies}
            movies={favoriteMovies}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
