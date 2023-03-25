import { createStore } from "redux";
import combinedReducer from "./combine-reducer";
const store = createStore(combinedReducer)
export { store }