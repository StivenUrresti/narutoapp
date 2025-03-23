import { combineReducers } from "@reduxjs/toolkit";
import loading from "../../slices/loading";

const rootReducer = combineReducers({
	loading,
});

export default rootReducer;
