import { applyMiddleware, createStore, compose } from "redux";
import RootReducer from "./rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(logger))
);

export default store;
