import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  show: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increase(state) {
      state.counter++;
    },
    decrease(state) {
      state.counter--;
    },
    increase5(state, action) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.show = !state.show;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
