import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";

const RootReducer = combineReducers({
  cake: cakeReducer,
  
});

export default RootReducer;
