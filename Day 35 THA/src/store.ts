import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/indes";

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;