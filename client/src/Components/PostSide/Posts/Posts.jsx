import React from "react";
import "./Posts.css";
// import { postsData } from "../../../Data/PostData";
import Post from "./Post/Post";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import authReducer from "../../../Reducers/AuthReducer";
import { getTimelinePosts } from "../../../Action/postAction";

const Posts = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);
  if (!posts) return "Show People what's in your mind";
  if (params.id) posts = posts.filter((post) => post.userId === params.id);
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
