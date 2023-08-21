import MoviesCard from "../MoviesCard/MoviesCard";
import "../../Movies/MoviesCardList/MoviesCardList.css";

function MoviesCardList() {
  return (
    <>
      <section className="moviesList">
        <MoviesCard />
      </section>
    </>
  );
}

export default MoviesCardList;
