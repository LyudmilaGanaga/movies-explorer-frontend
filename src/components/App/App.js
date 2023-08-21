import React from "react";
import { Routes, Route } from "react-router-dom";

import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { Profile } from "../Profile/Profile";
import Main from "../Main/Main";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="/saved-movies" element={<SavedMovies />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/sign-in" element={<Login />} />

        <Route path="/sign-up" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
