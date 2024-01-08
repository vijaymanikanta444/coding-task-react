"use client";

/* Core */
import { useState } from "react";

/* Instruments */
import {
  useSelector,
  selectCount,
  useDispatch,
  increment,
  decreament,
  incrementByAmount,
  incrementIfOddAsync
} from "@/lib/redux";
import styles from "./counter.module.css";

export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

// state to store the increment value
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {
            dispatch(decreament());
          }}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          type="number"
          className={styles.textbox}
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          aria-label="Set increment amount"
        />
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => {
            dispatch(incrementByAmount(incrementAmount));
          }}
          >
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={() => {
            dispatch(incrementIfOddAsync(incrementAmount));
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};
