import React, { useState, useEffect } from "react";

function PostForm({ onSubmit, initialValues }) {
  const [title, setTitle] = useState(initialValues?.title || "");
  const [content, setContent] = useState(initialValues?.content || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() && content.trim()) {
      onSubmit({ title, content });
      setTitle("");
      setContent("");
    }
  };

  useEffect(() => {
    if (initialValues) {
      setTitle(initialValues.title);
      setContent(initialValues.content);
    }
  }, [initialValues]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </div>
      <button type="submit">
        {initialValues ? "Update Post" : "Add Post"}
      </button>
    </form>
  );
}

export default PostForm;
