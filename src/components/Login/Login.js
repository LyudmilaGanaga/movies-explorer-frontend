import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import "../Register/Register.css";
import headerLogo from "../../images/logo.svg";

export function Login() {
  return (
    <div className="auth">
      <Link to="/" className="header__logo">
        <img src={headerLogo} alt="Лого" />
      </Link>
      <p className="auth__title">Рады видеть!</p>

      <form className="auth__form" name="login" noValidate>
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
          placeholder=""
          id="password"
          name="password"
          type="password"
          required
        />
        <button className="login__button-container" type="submit">
          Войти
        </button>
      </form>
      <p className="auth__signin">
        Еще не зарегистрированы?
        <Link to="/sign-up" className="auth__login-link">
          Регистрация
        </Link>
      </p>
    </div>
  );
}
