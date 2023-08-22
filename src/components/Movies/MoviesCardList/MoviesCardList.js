import MoviesCard from "../MoviesCard/MoviesCard";
import "../../Movies/MoviesCardList/MoviesCardList.css";

function MoviesCardList() {
  return (
    <ul className="moviesList">
      <MoviesCard />
    </ul>
  );
}

export default MoviesCardList;
