export const ADD_FAVORITE = "ADD_FAVORITE";
export const NEXT_MOVIE = "NEXT_MOVIE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const BACK_FIRST = "BACK_FIRST";
export const BACK_MOVIE = "BACK_MOVIE";

export const addFavorite = (movie) => {
  return { type: ADD_FAVORITE, payload: movie };
};

export const nextMovie = () => {
  return { type: NEXT_MOVIE };
};

export const removeFavorite = (movieId) => {
  return { type: REMOVE_FAVORITE, payload: movieId };
};

export const backFirst = () => {
  return { type: BACK_FIRST };
};

export const backMovie = () => {
  return { type: BACK_MOVIE };
};
