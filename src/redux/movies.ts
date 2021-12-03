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
  mode: number;
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

export enum Mode {
  Popular,
  Search,
  "Now Playing",
  "Top Rated",
  Upcoming,
}

let page = 1;
let loading = false;
let query = "";
let fetchId: number = 0;

const initialState: MoviesState = {
  error: false,
  finished: false,
  mode: Mode.Popular,
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
      state.finished = false;
      moviesAdapter.removeAll(state);
    },
    setMode(state, action: PayloadAction<number>) {
      state.mode = action.payload;
    },
  },
});

export const { addMovies, setError, setFinished, clearMovies, setMode } =
  movies.actions;

export const { selectById: selectMovieById, selectIds: selectMovieIds } =
  moviesAdapter.getSelectors((state: RootState) => state.movies);

export default movies.reducer;

export const fetchMovies = (): AppThunk => async (dispatch, getState) => {
  if (loading) return;
  loading = true;
  const localId = createLocalId();
  const { body, error } = await fetchMovieRouter(getState().movies.mode);
  if (!checkLocalId(localId)) return;
  loading = false;
  if (error) return dispatch(setError());

  page++;
  const movies = body.results;
  if (!movies || movies.length < 20) dispatch(setFinished());

  if (movies) dispatch(addMovies(movies));
};

const fetchMovieRouter = async (mode: number) => {
  switch (mode) {
    case Mode.Popular:
      return await MovieApi.fetchMovies(page);
    case Mode.Search:
      return await MovieApi.fetchSearch(query, page);
    case Mode["Now Playing"]:
      return await MovieApi.fetchNowPlaying(page);
    case Mode["Top Rated"]:
      return await MovieApi.fetchTopRated(page);
    case Mode.Upcoming:
      return await MovieApi.fetchUpcoming(page);
    default:
      return { error: true };
  }
};

export const selectNewMode =
  (mode: number, q: string = ""): AppThunk =>
  async (dispatch) => {
    page = 1;
    loading = false;
    query = q;

    dispatch(setMode(mode));
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
