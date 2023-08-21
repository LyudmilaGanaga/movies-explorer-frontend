import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import headerLogo from "../../images/logo.svg";

export function Register() {
  return (
    <div className="auth">
      <Link to="/" className="header__logo">
        <img src={headerLogo} alt="Лого" />
      </Link>
      <p className="auth__title">Добро пожаловать!</p>

      <form className="auth__form" name="register">
        <label htmlFor="name" className="auth__name">
          Имя
        </label>
        <input
          placeholder="Виталий"
          className="auth__input"
          id="email"
          name="email"
          type="email"
          required
        />
        <label htmlFor="name" className="auth__name">
          E-mail
        </label>
        <input
          className="auth__input"
          placeholder="pochta@yandex.ru|"
          id="email"
          name="email"
          type="email"
          required
        />
        <label htmlFor="name" className="auth__name">
          Пароль
        </label>
        <input
          className="auth__input"
          placeholder="••••••••••••••"
          id="password"
          name="password"
          type="password"
          required
        />

        <p className="auth__line">Что-то пошло не так...</p>

        <button className="auth__button-container" type="submit">
          Зарегистрироваться
        </button>
      </form>

      <p className="auth__signin">
        Уже зарегистрированы?
        <Link to="/sign-in" className="auth__login-link">
          Войти
        </Link>
      </p>
    </div>
  );
}
