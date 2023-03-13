import profileInfo from '../data/profile.json';
import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: profileInfo,
});

export default profileSlice.reducer;