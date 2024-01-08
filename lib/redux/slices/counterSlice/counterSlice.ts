/* Core */
import { createSlice } from "@reduxjs/toolkit";

const initialState: CounterSliceState = {
  value: 0,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //incrementByAmount loginc here
    increment: (state: CounterSliceState) => {
      state.value += 1;
    },
    decreament: (state: CounterSliceState) => {
      state.value -= 1;
    },
    incrementByAmount: (state: CounterSliceState, action: incrementByAmountAction) => {
      state.value += action.payload
    }
  },
});

export const { increment, decreament, incrementByAmount } = counterSlice.actions;

/* Types */
export interface CounterSliceState {
  value: number;
  status: "idle" | "loading" | "failed";
}

export interface incrementByAmountAction {
  type: string;
  payload : number
}