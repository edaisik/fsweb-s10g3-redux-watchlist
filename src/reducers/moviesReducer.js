import {
  ADD_FAVORITE,
  NEXT_MOVIE,
  REMOVE_FAVORITE,
  BACK_FIRST,
  BACK_MOVIE,
} from "../actions/movieActions.js";
import { movies } from "./../movies";

const initialState = {
  movies: movies,
  sira: 0,
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      const movieToAdd = state.movies[state.sira];
      if (
        movieToAdd &&
        !state.favorites.find((movie) => movie.id === movieToAdd.id)
      ) {
        return {
          ...state,
          favorites: [...state.favorites, movieToAdd],
        };
      }
      return state;
    case NEXT_MOVIE:
      return {
        ...state,
        sira: state.sira + 1,
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case BACK_FIRST:
      return {
        ...state,
        sira: 0,
      };
    case BACK_MOVIE:
      return {
        ...state,
        sira: state.sira - 1,
      };
    default:
      return state;
  }
};

export default reducer;
