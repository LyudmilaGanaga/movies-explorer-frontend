import MoviesCard from "../MoviesCard/MoviesCard";
import "../MoviesCardList/MoviesCardList.css";

function MoviesCardList() {
  return (
      <ul className="moviesList__saved">
        <MoviesCard />
      </ul>
  );
}

export default MoviesCardList;
