import { combineReducers } from "redux";
import BatReducer from "./bat/BatReducer";
import BallReducer from "./ball/Ballreducer";
console.log("root Reducer");
// merged store
const rootReducer = combineReducers({
  Ball: BallReducer,
  Bat: BatReducer,
});
export default rootReducer;
