import React from "react";

import "../SearchForm/SearchForm.css";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox.js";

function SearchForm() {
  return (
    <section className="searchForm">
      <form novalidate className="searchForm__form">
        <input
          type="text"
          className="searchForm__input"
          placeholder="Фильм"
          id="film"
          name="film"
          required
        />

        <div className="searchForm__button-box">
          <button type="submit" className="searchForm__button">
            Найти
          </button>
          <span className="searchForm__line"></span>
        </div>

        <FilterCheckbox />
      </form>

      <span className="searchForm__container-line"></span>
    </section>
  );
}

export default SearchForm;
