import profileInfo from '../data/profile.json';
import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: profileInfo,
    reducers: {
        updateProfile: (state, action) => {
            state = action.payload;
            return state;
        }
    }
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;