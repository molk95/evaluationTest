import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post, getComments }) => {
  return (
    <div>
      <h4>Title - {post.title}</h4>
      <span>{post.body}</span>
      <Link to={`/postComments/${post.id}`}>
        <button onClick={() => getComments(post.id)}>
          Comments.............
        </button>
      </Link>
    </div>
  );
};

export default PostCard;
