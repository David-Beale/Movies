import { createSlice, EntityId, PayloadAction } from "@reduxjs/toolkit";

interface DetailsState {
  id: EntityId;
  position: string;
}

const initialState: DetailsState = {
  id: -1,
  position: "",
};

const details = createSlice({
  name: "details",
  initialState: initialState,
  reducers: {
    setDetailsId(state, action: PayloadAction<DetailsState>) {
      state.id = action.payload.id;
      state.position = action.payload.position;
    },
    clearDetailsId(state) {
      state.id = -1;
    },
  },
});

export const { setDetailsId, clearDetailsId } = details.actions;

export default details.reducer;
