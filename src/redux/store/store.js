import { createStore } from "redux";
import { RootReducers } from "../reducers";

export const store = createStore(RootReducers);
