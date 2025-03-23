import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../libraries/redux";

interface I_loading {
	loading: boolean;
}

const initialState: I_loading = {
	loading: false,
};

export const loadingSlice = createSlice({
	name: "loading",
	initialState,
	reducers: {
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
	},
});

export const { setLoading } = loadingSlice.actions;
export const selectLoading = (state: RootState) => state.rootReducer.loading;

export default loadingSlice.reducer;
