const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

// Action Types
const BUY_CAKE = "BUY_CAKE";
const BUY_CANDLE = "BUY_CANDLE";

// Action Creator
const buy_cake = () => {
  return { type: BUY_CAKE };
};
const buy_candle = () => {
  return { type: BUY_CANDLE };
};

// Intial State
const initialCakeState = { numberOfCakes: 10 };
const initialCandleState = { numberOfCandle: 30 };

// Reducer
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numberOfCakes: state.numberOfCakes - 1 };
    default:
      return state;
  }
};

const candleReducer = (state = initialCandleState, action) => {
  switch (action.type) {
    case BUY_CANDLE:
      return { ...state, numberOfCandle: state.numberOfCandle - 1 };
    default:
      return state;
  }
};

// Information about all Reducers
const reducer = combineReducers({
  cake: cakeReducer,
  candle: candleReducer,
});

// store
const store = createStore(reducer);

console.log("Initial State: ", store.getState());
store.subscribe(() => console.log("Current Availabilty: ", store.getState()));

store.dispatch(buy_cake());
store.dispatch(buy_cake());
store.dispatch(buy_cake());

store.dispatch(buy_candle());
store.dispatch(buy_candle());
