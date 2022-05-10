import "./MoviesList.css";
import AddFavourites from "./AddFavourites";
import { useState } from "react";

let MoviesList = function ({ movies, AddfavouriteMovies }) {
  let [fav_icon, setFav_Icon] = useState(0);

  return (
    <div className=" d-flex gap-5  movielist-bucket-1 overflow-auto">
      {movies.map((val) => {
        return (
          <div className=" movie-img " onClick={AddfavouriteMovies(val)}>
            <div>
              <img
                key={Math.random()}
                src={val.Poster}
                className=" img-fluid "
                alt=""
              />
            </div>
            <AddFavourites fav_icon={fav_icon} setFav_Icon={setFav_Icon} />
          </div>
        );
      })}
    </div>
  );
};

export default MoviesList;
