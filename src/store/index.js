import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import root from "./modules/global";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  root,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
