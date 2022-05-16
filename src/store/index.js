// create a combined root reducer

import { configureStore } from "@reduxjs/toolkit";

// import someFeatureReducer from "./someFeature/reducer"

const store = configureStore({
  reducer: {},
});

export default store;
