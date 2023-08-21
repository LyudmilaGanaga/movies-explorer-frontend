import "./Movies.css";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import OverlayMenu from "../Navigation/OverlayMenu/OverlayMenu";
import ShowMore from "./ShowMore/ShowMore";

function Movies() {
  return (
    <main className="moviesPage">
      <Navigation />
      <OverlayMenu />
      <SearchForm />
      <MoviesCardList />
      <ShowMore />
      <Footer />
    </main>
  );
}

export default Movies;
