import userReducer from "./userReducer";
import { combineReducers } from "redux";
import notesReducer from "./notesReducer";

const rootReducer = combineReducers({
    user: userReducer,
    notes: notesReducer,
});

export default rootReducer;