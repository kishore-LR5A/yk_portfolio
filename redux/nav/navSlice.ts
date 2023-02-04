import { createSlice } from "@reduxjs/toolkit";

export interface MobNavState {
  isOpen: boolean;
}

const initialState: MobNavState = {
  isOpen: false,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleNav } = navSlice.actions;

export default navSlice.reducer;
