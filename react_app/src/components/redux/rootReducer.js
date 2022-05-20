import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import userReducer from "./user/userReducer";
import counterReducer from "./counter/counterReducer";

const RootReducer = combineReducers({
  cake: cakeReducer,
  user: userReducer,
  counter: counterReducer,
});

export default RootReducer;
