import React from "react";
import Post from "../post/Post";
import "./posts.css";
const Posts = ({ posts }) => {
  return (
    <div className="posts">
      <div className="posts">
        {posts.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
