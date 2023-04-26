import React from 'react';
import { Link } from 'react-router-dom';

function Post({ post, onDelete, onEdit }) {
  const handleDelete = () => {
    onDelete(post.id);
  };

  const handleEdit = () => {
    onEdit(post.id);
  };

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
      <Link to={`/posts/${post.id}`}>View</Link>
    </div>
  );
}

export default Post;
