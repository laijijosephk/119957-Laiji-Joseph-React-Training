import { INCREMENT, DECREMENT } from "./counterTypes";

export const inc_Counter = () => {
  return {
    type: INCREMENT,
  };
};
export const dec_Counter = () => {
  return {
    type: DECREMENT,
  };
};
 