import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit";
import { MovieApi } from "../Api/MovieApi";
import type { AppThunk, RootState } from "./store";

interface MoviesState {
  error: boolean;
  finished: boolean;
}
export interface Movie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  genre_ids: number[];
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

const moviesAdapter = createEntityAdapter<Movie>();

let page = 1;
let loading = false;

const initialState: MoviesState = {
  error: false,
  finished: false,
};

const movies = createSlice({
  name: "genres",
  initialState: moviesAdapter.getInitialState(initialState),
  reducers: {
    addMovies(state, action: PayloadAction<Movie[]>) {
      moviesAdapter.addMany(state, action.payload);
    },
    setError(state) {
      state.error = true;
    },
    setFinished(state) {
      state.finished = true;
    },
  },
});

export const { addMovies, setError, setFinished } = movies.actions;

export const { selectById: selectMovieById, selectIds: selectMovieIds } =
  moviesAdapter.getSelectors((state: RootState) => state.movies);

export default movies.reducer;

export const fetchMovies = (): AppThunk => async (dispatch) => {
  if (loading) return;
  loading = true;
  const { body, error } = await MovieApi.fetchMovies(page);
  loading = false;
  if (error) {
    dispatch(setError());
    return;
  }
  page++;
  const movies = body.results;
  if (!movies || movies.length < 20) {
    dispatch(setFinished());
  }
  if (movies) dispatch(addMovies(movies));
};
