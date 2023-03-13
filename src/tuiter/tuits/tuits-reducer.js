import { createSlice } from "@reduxjs/toolkit";
import tuitsArray from "../data/tuits.json";

const tuitsSlice = createSlice({
    name: "tuits",
    initialState: tuitsArray,
});

export default tuitsSlice.reducer;