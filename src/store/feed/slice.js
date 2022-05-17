import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  posts: [],
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    postsFetched: (state, action) => {
      console.log("postsFetched action", action);
      // get 5 posts at time, and keep the posts
      // currently in the state, and add the new incoming ones at the end of the array
      state.posts = [...state.posts, ...action.payload];
      state.loading = false;
    },
  },
});

export const { startLoading, postsFetched } = feedSlice.actions;
export default feedSlice.reducer;
