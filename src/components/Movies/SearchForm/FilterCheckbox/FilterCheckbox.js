import React from "react";

function FilterCheckbox() {
  return (
    <div className="filterCheckbox">
      <label className="filterCheckbox__box">
        <input
          id="idCheckbox"
          type="checkbox"
          className="filterCheckbox__input"
        ></input>
        <span className="filterCheckbox__span"></span>
      </label>
      <p className="filterCheckbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;