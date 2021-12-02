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

enum Mode {
  popular,
  search,
}

let page = 1;
let loading = false;
let query = "";
let mode = Mode.popular;
let fetchId: number = 0;

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
    clearMovies(state) {
      moviesAdapter.removeAll(state);
    },
  },
});

export const { addMovies, setError, setFinished, clearMovies } = movies.actions;

export const { selectById: selectMovieById, selectIds: selectMovieIds } =
  moviesAdapter.getSelectors((state: RootState) => state.movies);

export default movies.reducer;

export const fetchMovies = (): AppThunk => async (dispatch) => {
  if (loading) return;
  loading = true;
  const localId = createLocalId();
  const { body, error } = await fetchMovieRouter();
  if (!checkLocalId(localId)) return;
  loading = false;
  if (error) return dispatch(setError());

  page++;
  const movies = body.results;
  if (!movies || movies.length < 20) dispatch(setFinished());

  if (movies) dispatch(addMovies(movies));
};

const fetchMovieRouter = async () => {
  switch (mode) {
    case Mode.popular:
      return await MovieApi.fetchMovies(page);
    case Mode.search:
      return await MovieApi.fetchSearch(query, page);
    default:
      return { error: true };
  }
};

export const setSearchQuery =
  (q: string): AppThunk =>
  async (dispatch) => {
    page = 1;
    loading = false;
    query = q;
    mode = Mode.search;
    dispatch(clearMovies());
    dispatch(fetchMovies());
  };
export const closeSearch =
  (q: string): AppThunk =>
  async (dispatch) => {
    page = 1;
    loading = false;
    query = "";
    mode = Mode.popular;
    dispatch(clearMovies());
    dispatch(fetchMovies());
  };

const createLocalId = () => {
  const localId = Date.now();
  fetchId = localId;
  return localId;
};
const checkLocalId = (localId: number) => {
  // ignore outdated requests
  return fetchId === localId;
};
