import axios from "axios";
import { startLoading, postsFetched } from "./slice";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export async function fetchPosts(dispatch, getState) {
  try {
    dispatch(startLoading());
    // checking the current length of posts in the Redux state
    const offset = getState().feed.posts.length;
    // added offset and limit to the url
    const response = await axios.get(
      `${API_URL}/posts?offset=${offset}&limit=5`
    );
    //const response = await axios.get(`${API_URL}/posts`);
    console.log("response", response);
    const posts = response.data.rows;
    dispatch(postsFetched(posts));
  } catch (e) {
    console.log(e.message);
  }
}
