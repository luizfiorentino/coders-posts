import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/feed/actions";
import { selectFeedPosts } from "../store/feed/selectors";

export default function HomePage() {
  const dispatch = useDispatch();
  const posts = useSelector(selectFeedPosts);

  useEffect(() => {
    dispatch(fetchPosts);
  }, [dispatch]);

  return (
    <div>
      <h2>Posts Feed</h2>
      <ul>
        {!posts.length
          ? "Loading"
          : posts.map((post) => (
              <li key={post.id}>
                {post.title}
                <p>{post.content}</p>
              </li>
            ))}
      </ul>
    </div>
  );
}
