import React from "react";

const PostCard = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <h1>{post.excerpt}</h1>
    </div>
  );
};

export default PostCard;
