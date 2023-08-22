import MoviesCardList from "./MoviesCardList/MoviesCardList";
// import Preloader from './Preloader/Preloader';
import SearchForm from "../Movies/SearchForm/SearchForm";
import ShowMoreSaved from "./ShowMoreSaved/ShowMoreSaved";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

function SavedMovies() {
  return (
    <main className="moviesPage">
      <Navigation />

      <SearchForm />
      <MoviesCardList />
      <ShowMoreSaved />
      <Footer />

      {/* <Preloader/> */}
    </main>
  );
}

export default SavedMovies;
