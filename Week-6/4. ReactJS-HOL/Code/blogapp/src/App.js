import React from 'react';
import BlogPosts from './Posts';
import './App.css';

function BlogApp() {
  return (
    <div className="App">
      <header className="App-header">
        <BlogPosts />
      </header>
    </div>
  );
}

export default BlogApp;