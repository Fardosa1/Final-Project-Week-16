import React from 'react';
import { Link } from 'react-router-dom';

function PostList({ posts, onDelete, onEdit }) {
  return (
    <div>
      <h2>Posts</h2>
      <Link to="/posts/new">Add Post</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => onDelete(post.id)}>Delete</button>
            <Link to={`/posts/${post.id}/edit`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;

// This portion of the code This is a React component called PostList. It displays a 
//list of posts that is passed in as a prop. It also has an "Add Post" button that links to a form to create a new post. 
//For each post, it displays the title, content, and has a delete button and an edit link. When the delete b
//utton is clicked, it calls a function passed in as a prop with the id of the post.
// When the edit link is clicked, it goes to a form to edit the post.



