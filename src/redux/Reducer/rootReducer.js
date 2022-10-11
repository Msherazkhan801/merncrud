import { combineReducers } from "redux";
import posts from "./MemoryReducer"
import authReducer from "./auth"
const rootReducers = combineReducers({
postData:posts,
authData:authReducer

});

export default rootReducers;