import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit";
import { MovieApi } from "../Api/MovieApi";
import type { AppThunk, RootState } from "./store";

export interface Genre {
  id: number;
  name: string;
}

const genresAdapter = createEntityAdapter<Genre>();

const genres = createSlice({
  name: "genres",
  initialState: genresAdapter.getInitialState(),
  reducers: {
    addGenres(state, action: PayloadAction<Genre[]>) {
      genresAdapter.addMany(state, action.payload);
    },
  },
});

export const { addGenres } = genres.actions;

export const { selectById: selectGenreById } = genresAdapter.getSelectors(
  (state: RootState) => state.genres
);

export default genres.reducer;

export const fetchGenres = (): AppThunk => async (dispatch) => {
  const { body, error } = await MovieApi.fetchGenreList();
  if (error) return;
  const genres = body.genres;

  if (genres) dispatch(addGenres(genres));
};
