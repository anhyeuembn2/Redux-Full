import { combineReducers } from "redux";
import nameReducer from "./nameReducer";
import ageReducer from "./ageReducer";
import userReducer from "./Reducer";
const root=combineReducers({
    /* nameReducer,
    ageReducer, */
    userReducer
})
export default root;