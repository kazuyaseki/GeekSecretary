import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import reducer from "../reducers";

const store = applyMiddleware(createLogger())(createStore)(reducer);

export default store;
