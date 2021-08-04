import reducer from "./reducer";
import reducer2 from "./reducer2";

import { combineReducers } from "redux";


const rootReducer = combineReducers({
    name: reducer,
    email: reducer2,
});

export default rootReducer;