import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import About from './About';
import PostList from './PostList';
import ResourceList from './ResourceList';
import PostForm from './PostForm';
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'My Experience with Anxiety', content: 'For as long as I can remember, I have struggled with anxiety. It sometimes has impacted every aspect of my life- from relationships to my career and physical health. Therapy has been a lifeline for me.  Working with a mental health professional has helped me develop coping strategies and gain a better understanding of my triggers and thought patterns. Medication has also been helpful in managing some of my more severe symptoms. Beyond thatfound that self-care practices like exercise, meditation, and journaling have helped me stay grounded and manage my anxiety on a day-to-day basis. hope that by sharing my story, others can feel less alone and more empowered to seek the help they need. Anxiety can be overwhelming, but its not something we have to face alone.  ' },
    { id: 2, title: 'Dealing with Depression', content: 'Depression is a condition that affects many people, including myself. It can be a challenging and often overwhelming experience, but I have found that there are ways to manage and cope with it. One of the most important things that has helped me is talking to others about my experience. Whether its a friend, family member, or therapist, having someone to share my thoughts and feelings with has been invaluable. I have also found it helpful to practice self-care, such as taking time for myself to do things I enjoy, getting enough sleep, and eating well. If you are struggling with depression, please know that there is hope and help available. Dont be afraid to reach out to someone you trust, and remember that taking care of your mental health is just as important as taking care of your physical health' },
    { id: 3, title: 'Coping with Stress', content: 'Dealing with stress can be overwhelming and draining, but there are things Ive found that have helped me cope. One thing thats been really helpful is making sure to take breaks throughout the day. Even if its just a few minutes to go for a walk or take some deep breaths, it can make a big difference in how I feel. Another thing thats been helpful is practicing mindfulness and meditation. Taking a few minutes to focus on my breath and clear my mind can be really soothing and calming, and it helps me feel more centered and grounded. While its not always easy to deal with stress, Ive learned that taking small steps can make a big difference in how I feel. By prioritizing my mental and emotional wellbeing, Ive been able to cope with stress and feel more in control of my life.' }
  ]);

  const [resources] = useState([
    { id: 1, title: 'National Alliance on Mental Illness', content: 'https://www.nami.org/' },
    { id: 2, title: 'Mental Health America', content: 'https://www.mhanational.org/' },
    { id: 3, title: 'Anxiety and Depression Association of America', content: 'https://adaa.org/' }
  ]);

  const handleAddPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, { id: Date.now(), ...newPost }]);
  };

  const handleDeletePost = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  const handleEditPost = (id, updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === id ? { ...post, ...updatedPost } : post))
    );
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route
            path="/posts"
            element={<PostList posts={posts} onDelete={handleDeletePost} onEdit={handleEditPost} />}
          />
          <Route path="/posts/new" element={<PostForm onSubmit={handleAddPost} />} />
          <Route
            path="/posts/:id/edit"
            element={<PostForm posts={posts} onSubmit={handleEditPost} />}
          />
          <Route path="/resources" element={<ResourceList resources={resources} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


//This portion of the code defines the main component of a React web application, which imports necessary modules and custom components defined in other files.
// It also defines two state variables, "posts" and "resources", and three functions for modifying the "posts" variable.

//t uses the useState hook to define two state variables: "posts" and "resources". "posts" is an array of objects, with each object representing 
//a blog post and containing an "id", "title", and "content" property.
// "resources" is an array of objects, with each object representing a resource and containing an "id", "title", and "content" property.

// defines three functions for modifying the "posts" state variable: "handleAddPost", "handleDeletePost", and "handleEditPost". "handleAddPost" adds a 
//new post to the "posts" array with a unique id 
//generated using Date.now(). "handleDeletePost" removes a post from the "posts" array based on its id. "handleEditPost" updates a post in the "posts"
// array with new data based on its id.

//When the application is loaded, this component is rendered and the user can navigate to different routes to view and interact with the other components.



