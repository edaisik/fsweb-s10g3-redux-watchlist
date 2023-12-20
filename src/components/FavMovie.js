import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../actions/movieActions.js";
import { moviesOriginal } from "./../movies";

export default function FavMovie({ title, id }) {
  const movies = useSelector((store) => store.movies);
  const favMovies = useSelector((store) => store.favorites);
  const dispatch = useDispatch();

  function listemdenCikar() {
    dispatch(removeFavorite(id));
    const movie = favMovies.find((movie) => movie.id === id);
    const index = moviesOriginal.findIndex((movie) => movie.id === id);
    movies.splice(index, 0, movie);
  }

  return (
    <div className="flex p-3 pl-4 bg-white mb-2 shadow items-center group">
      <div className="pr-4 flex-1">{title}</div>
      <button onClick={listemdenCikar} className="px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100">
        Çıkar
      </button>
    </div>
  );
}
