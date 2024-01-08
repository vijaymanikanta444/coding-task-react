/* Instruments */
import  { ReduxThunkAction, incrementByAmount, CounterSliceState } from "@/lib/redux";


export const incrementIfOddAsync =
  (amount: number): ReduxThunkAction =>
  (dispatch, getState) => {
    const { counter } : {counter : CounterSliceState} = getState();

    if(counter?.value % 2 !== 0){
      dispatch(incrementByAmount(amount))
    }
  };
