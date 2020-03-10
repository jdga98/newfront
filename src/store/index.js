import { createStore, combineReducers } from "redux";
import { data } from "./reducers";
const REDUX_DEVTOOL =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const Store = createStore(combineReducers({ data }), REDUX_DEVTOOL);
export default Store;
