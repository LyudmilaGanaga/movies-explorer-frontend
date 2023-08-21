import "../../Movies/MoviesCard/MoviesCard.css";
import Movies1 from "../../../images/card1.jpg";
import Movies2 from "../../../images/card2.jpg";
import Movies3 from "../../../images/card3.jpg";
import DeleteBtn from "../../../images/deleteMovie.svg";

function MoviesCard() {
  return (
    <>
      <li className="moviesCard moviesCard__saved">
        <img className="moviesCard__photo" src={Movies1} alt="фильм" />
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">33 слова о дизайне</h3>
          <button className="moviesCard__button-save">
            <img src={DeleteBtn} alt="Удаление" />
          </button>
        </div>
        <h3 className="moviesCard__time">1ч 42м</h3>
      </li>
      <li className="moviesCard moviesCard__saved">
        <img className="moviesCard__photo" src={Movies2} alt="фильм" />
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">Киноальманах «100 лет дизайна»</h3>
        </div>
        <h3 className="moviesCard__time">1ч 42м</h3>
      </li>
      <li className="moviesCard moviesCard__saved">
        <img className="moviesCard__photo" src={Movies3} alt="фильм" />
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">В погоне за Бенкси</h3>
        </div>
        <h3 className="moviesCard__time">1ч 42м</h3>
      </li>
    </>
  );
}

export default MoviesCard;
