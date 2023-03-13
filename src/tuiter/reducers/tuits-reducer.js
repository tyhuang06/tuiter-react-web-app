import { createSlice } from "@reduxjs/toolkit";
import tuitsArray from "../data/tuits.json";

const currentUser = {
    "userName": "NASA",
    "handle": "nasa",
    "image": "nasa.png"
}

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "comments": 0,
    "retweets": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name: "tuits",
    initialState: tuitsArray,
    reducers: {
        createTuit: (state, action) => {
            const newTuit = {
                ...action.payload,
                ...templateTuit,
                "_id": (new Date()).getTime(),
            }
            state.unshift(newTuit);
        }
    }
});

export const { createTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;