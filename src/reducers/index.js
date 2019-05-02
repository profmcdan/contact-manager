import { combineReducers } from "redux";
import contactRecuder from "./contactReducer";

export default combineReducers({
  contact: contactRecuder,
});
