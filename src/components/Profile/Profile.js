import React from "react";
import "./Profile.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

export function Profile() {
  return (
    <section className="profile">
      <Navigation />
      <p className="profile__title">Привет, Виталий!</p>

      <div className="profile__container">
        <div className="profile__name-container">
          <label htmlFor="name" className="profile__name">
            Имя
          </label>
          <input
            className="profile__input"
            placeholder="Виталий"
            id="name"
            name="name"
            type="text"
            required
          />
        </div>
      </div>

      <span className="profile__line"></span>
      <div className="profile__container">
        <div className="profile__name-container">
          <label htmlFor="name" className="profile__name">
            E-mail
          </label>
          <input
            className="profile__input"
            placeholder="pochta@yandex.ru"
            id="name"
            name="name"
            type="text"
            required
          />
        </div>
      </div>

      <div className="profile__button">
        <p className="profile__button-edit" type="submit">
          Редактировать
        </p>
        <Link to="/" className="profile__button-escape" type="submit">
          Выйти из аккаунта
        </Link>
      </div>
    </section>
  );
}
