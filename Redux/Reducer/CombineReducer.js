import { combineReducers } from "redux";
import { firstReducer, classReducer, quoteReducer } from "./Reducer1";

const reducers = combineReducers({
    first: firstReducer,
    second:classReducer,
    third:quoteReducer
})

export default reducers;