import {
  createEntityAdapter,
  createSlice,
  EntityId,
  PayloadAction,
} from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface FavouritesState {
  open: boolean;
}
interface Favourite {
  id: EntityId;
  title: string;
}

const favouritesAdapter = createEntityAdapter<Favourite>();

const initialState: FavouritesState = {
  open: false,
};

const favourites = createSlice({
  name: "favourites",
  initialState: favouritesAdapter.getInitialState(initialState),
  reducers: {
    toggleOpen(state) {
      state.open = !state.open;
    },
    addFavourite(state, action: PayloadAction<Favourite>) {
      favouritesAdapter.addOne(state, action.payload);
    },
    removeFavourite(state, action: PayloadAction<EntityId>) {
      favouritesAdapter.removeOne(state, action.payload);
    },
  },
});

export const { toggleOpen, addFavourite, removeFavourite } = favourites.actions;

export const {
  selectById: selectFavouriteById,
  selectIds: selectFavouriteIds,
} = favouritesAdapter.getSelectors((state: RootState) => state.favourites);

export default favourites.reducer;
