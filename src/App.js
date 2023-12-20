//import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useDispatch, useSelector } from "react-redux";
import {
  nextMovie,
  addFavorite,
  backFirst,
  backMovie,
} from "./actions/movieActions.js";

function App() {
  //const [sira, setSira] = useState(0);
  const movies = useSelector((store) => store.movies);
  const favMovies = useSelector((store) => store.favorites);
  const sira = useSelector((store) => store.sira);
  console.log(movies);

  const dispatch = useDispatch();

  function sonrakiFilm() {
    dispatch(nextMovie());
  }

  function listemeEkle() {
    dispatch(addFavorite());
    if (sira === movies.length - 1) {
      movies.splice(sira, 1);
      dispatch(backFirst());
    } else {
      movies.splice(sira, 1);
    }
  }

  function oncekiFilm() {
    dispatch(backMovie());
  }

  function basaDon() {
    dispatch(backFirst());
  }

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie />
          <div className="flex gap-3 justify-end py-3">
            {sira > 0 && (
              <button
                onClick={oncekiFilm}
                className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
              >
                Önceki
              </button>
            )}
            {sira < movies.length - 1 && (
              <button
                onClick={sonrakiFilm}
                className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
              >
                Sıradaki
              </button>
            )}
            {sira > 0 && (
              <button
                onClick={basaDon}
                className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
              >
                Başa Dön
              </button>
            )}
            <button
              onClick={listemeEkle}
              className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
            >
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
