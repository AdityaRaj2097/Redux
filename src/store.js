import { createStore } from "redux";
import rootReducer from "./redux/rootreducer";
console.log("Hello");
const store = createStore(rootReducer);
export default store;
