import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit";
import { MarvelApi } from "../Api/MarvelApi";
import type { AppThunk, RootState } from "./store";

interface ComicsState {
  error: boolean;
  finished: boolean;
}
export interface Comic {
  id: string;
  thumbnail: {
    path: string;
  };
  title: string;
  dates: {
    date: string;
    type: string;
  }[];
  prices: {
    price: string;
    type: string;
  }[];
  creators: {
    items: {
      name: string;
      role: string;
    }[];
  };
}

const comicsAdapter = createEntityAdapter<Comic>();

let lastVisible = 0;
let loading = false;

const initialState: ComicsState = {
  error: false,
  finished: false,
};

const comics = createSlice({
  name: "comics",
  initialState: comicsAdapter.getInitialState(initialState),
  reducers: {
    addComics(state, action: PayloadAction<Comic[]>) {
      comicsAdapter.addMany(state, action.payload);
    },
    setError(state) {
      state.error = true;
    },
    setFinished(state) {
      state.finished = true;
    },
  },
});

export const { addComics, setError, setFinished } = comics.actions;

export const { selectById: selectComicById, selectIds: selectComicsIds } =
  comicsAdapter.getSelectors((state: RootState) => state.comics);

export default comics.reducer;

export const fetchComics = (): AppThunk => async (dispatch) => {
  if (loading) return;
  loading = true;
  const { comics, error } = await MarvelApi.fetchComics(lastVisible);
  loading = false;
  if (error) {
    dispatch(setError());
    return;
  }
  lastVisible += comics ? comics.length : 0;
  if (!comics || comics.length < 20) {
    dispatch(setFinished());
  }
  if (comics) dispatch(addComics(comics));
};
