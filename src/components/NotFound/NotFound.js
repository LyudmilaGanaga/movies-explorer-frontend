import React from "react";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="error">
      <div className="error__container">
        <h2 className="error__heading">404</h2>
        <p className="error__paragraph">Страница не найдена</p>
      </div>
      <button type="button" className="error__button-back">
        Назад
      </button>
    </section>
  );
}

export default NotFound;
