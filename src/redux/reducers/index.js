import { combineReducers } from "redux";
import app from "./appReducer";
import device from "./deviceReducer";

const rootReducer = combineReducers({
  app,
  device
});

export default rootReducer;
