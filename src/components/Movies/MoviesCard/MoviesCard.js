import "../MoviesCard/MoviesCard.css";
import Movies1 from "../../../images/card1.jpg";
import Movies2 from "../../../images/card2.jpg";
import Movies3 from "../../../images/card3.jpg";
import Movies4 from "../../../images/card4.jpg";
import Movies5 from "../../../images/card5.jpg";
import Movies6 from "../../../images/card6.jpg";
import Movies7 from "../../../images/card7.jpg";
import Movies8 from "../../../images/card8.jpg";
import Movies9 from "../../../images/card9.jpg";
import Movies10 from "../../../images/card10.jpg";
import Movies11 from "../../../images/card11.jpg";
import Movies12 from "../../../images/card12.jpg";
import Movies13 from "../../../images/card13.jpg";
import Movies14 from "../../../images/card14.jpg";
import Movies15 from "../../../images/card15.jpg";
import Movies16 from "../../../images/card16.jpg";
import LikeBtnActive from "../../../images/saveLike.svg";
import LikeBtn from "../../../images/saveLikeNo.svg";

function MoviesCard() {
  return (
    <>
      <li className="moviesCard">
        <img className="moviesCard__photo" src={Movies1} alt="фильм" />
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">33 слова о дизайне</h3>
          <button className="moviesCard__button-save">
            <img src={LikeBtnActive} alt="Лайк" />
          </button>
        </div>
        <h3 className="moviesCard__time">1ч 42м</h3>
      </li>

      <li className="moviesCard">
        <img className="moviesCard__photo" src={Movies2} alt="фильм" />
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">Киноальманах «100 лет дизайна»</h3>
          <button className="moviesCard__button-save">
            <img src={LikeBtn} alt="Пустой Лайк" />
          </button>
        </div>
        <h3 className="moviesCard__time">1ч 42м</h3>
      </li>

      <li className="moviesCard">
        <img className="moviesCard__photo" src={Movies3} alt="фильм" />
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">В погоне за Бенкси</h3>
          <button className="moviesCard__button-save">
            <img src={LikeBtn} alt="Пустой Лайк" />
          </button>
        </div>
        <h3 className="moviesCard__time">1ч42м</h3>
      </li>

      <li className="moviesCard">
        <img className="moviesCard__photo" src={Movies4} alt="фильм" />
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">Баския: Взрыв реальности</h3>
          <button className="moviesCard__button-save">
            <img src={LikeBtn} alt="Пустой Лайк" />
          </button>
        </div>
        <h3 className="moviesCard__time">1ч 42м</h3>
      </li>

      <li className="moviesCard">
        <img className="moviesCard__photo" src={Movies5} alt="фильм" />
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">Бег это свобода</h3>
          <button className="moviesCard__button-save">
            <img src={LikeBtnActive} alt="Лайк" />
          </button>
        </div>
        <h3 className="moviesCard__time">1ч42м</h3>
      </li>

      <li className="moviesCard">
        <img className="moviesCard__photo" src={Movies6} alt="фильм" />
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">Книготорговцы</h3>
          <button className="moviesCard__button-save">
            <img src={LikeBtnActive} alt="Лайк" />
          </button>
        </div>
        <h3 className="moviesCard__time">1ч 42м</h3>
      </li>

      <li className="moviesCard">
        <img className="moviesCard__photo" src={Movies7} alt="фильм" />
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">Когда я думаю о Германии ночью</h3>
          <button className="moviesCard__button-save">
            <img src={LikeBtn} alt="Пустой Лайк" />
          </button>
        </div>
        <h3 className="moviesCard__time">1ч 42м</h3>
      </li>

      <li className="moviesCard">
        <img className="moviesCard__photo" src={Movies8} alt="фильм" />
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">
            Gimme Danger: История Игги и The Stooges
          </h3>
          <button className="moviesCard__button-save">
            <img src={LikeBtn} alt="Пустой Лайк" />
          </button>
        </div>
        <h3 className="moviesCard__time">1ч 42м</h3>
      </li>

      <li className="moviesCard">
        <img className="moviesCard__photo" src={Movies9} alt="фильм" />
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">Дженис: Маленькая девочка грустит</h3>
          <button className="moviesCard__button-save">
            <img src={LikeBtnActive} alt="Лайк" />
          </button>
        </div>
        <h3 className="moviesCard__time">1ч 42м</h3>
      </li>

      <li className="moviesCard">
        <img className="moviesCard__photo" src={Movies10} alt="фильм" />
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">Соберись перед прыжком</h3>
        </div>
        <h3 className="moviesCard__time">1ч 42м</h3>
      </li>

      <li className="moviesCard">
        <img className="moviesCard__photo" src={Movies11} alt="фильм" />
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">Пи Джей Харви: A dog called money</h3>
        </div>
        <h3 className="moviesCard__time">1ч42м</h3>
      </li>

      <li className="moviesCard">
        <img className="moviesCard__photo" src={Movies12} alt="фильм" />
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">По волнам: Искусство звука в кино</h3>
        </div>
        <h3 className="moviesCard__time">1ч 42м</h3>
      </li>

      <li className="moviesCard">
        <img className="moviesCard__photo" src={Movies13} alt="фильм" />
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">Рудбой</h3>
          <button className="moviesCard__button-save">
            <img src={LikeBtn} alt="Пустой Лайк" />
          </button>
        </div>
        <h3 className="moviesCard__time">1ч 42м</h3>
      </li>

      <li className="moviesCard">
        <img className="moviesCard__photo" src={Movies14} alt="фильм" />
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">Скейт — кухня</h3>
          <button className="moviesCard__button-save">
            <img src={LikeBtn} alt="Пустой Лайк" />
          </button>
        </div>
        <h3 className="moviesCard__time">1ч 42м</h3>
      </li>

      <li className="moviesCard">
        <img className="moviesCard__photo" src={Movies15} alt="фильм" />
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">Война искусств</h3>
          <button className="moviesCard__button-save">
            <img src={LikeBtn} alt="Пустой Лайк" />
          </button>
        </div>
        <h3 className="moviesCard__time">1ч 42м</h3>
      </li>

      <li className="moviesCard">
        <img className="moviesCard__photo" src={Movies16} alt="фильм" />
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">Зона</h3>
          <button className="moviesCard__button-save">
            <img src={LikeBtnActive} alt="Лайк" />
          </button>
        </div>
        <h3 className="moviesCard__time">1ч 42м</h3>
      </li>

    </>
  );
}

export default MoviesCard;
