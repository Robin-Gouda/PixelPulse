import React from "react";
import "./Posts.css";
// import { postsData } from "../../../Data/PostData";
import Post from "./Post/Post";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import authReducer from "../../../Reducers/AuthReducer";
import { getTimelinePosts } from "../../../Action/postAction";

const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);
  return (
    <div className="Posts">
      {/* {postsData.map((post, id) => { */}
      {loading
        ? "Fetching Posts..."
        : posts.map((post, id) => {
            return <Post data={post} id={id} />;
          })}
    </div>
  );
};

export default Posts;
