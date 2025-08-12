import React, { useState } from 'react';
import { books, courses, blogs } from './data';
import './App.css';

// Component for Book Details
function BookInfo({ items }) {
  return (
    <div className="details-section">
      <h1>Book Information</h1>
      {items.map(item => (
        <div key={item.id}>
          <h3>{item.bname}</h3>
          <h4>{item.price}</h4>
        </div>
      ))}
    </div>
  );
}

// Component for Course Details
function CourseInfo({ items }) {
  return (
    <div className="details-section">
      <h1>Course Information</h1>
      {items.map(item => (
        <div key={item.id}>
          <h2>{item.cname}</h2>
          <h4>{item.date}</h4>
        </div>
      ))}
    </div>
  );
}

// Component for Blog Details
function BlogInfo({ items }) {
  return (
    <div className="details-section">
      <h1>Blog Information</h1>
      {items.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <h3>{item.author}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

// Main App Component demonstrating conditional rendering
function App() {
  const [view, setView] = useState('all'); // Can be 'all', 'books', 'courses', or 'blogs'

  return (
    <div className="app-container">
      <h1>Blogger App Dashboard</h1>
      <p>Select a view to see conditional rendering in action.</p>
      
      <div className="controls">
        <button onClick={() => setView('all')}>Show All</button>
        <button onClick={() => setView('books')}>Books Only</button>
        <button onClick={() => setView('courses')}>Courses Only</button>
        <button onClick={() => setView('blogs')}>Blogs Only</button>
      </div>

      <div className="details-container">
        {/* Method 1: Ternary Operator `? :` */}
        {/* Shows Course Details if view is 'all' or 'courses', otherwise shows nothing. */}
        {view === 'all' || view === 'courses' ? <CourseInfo items={courses} /> : null}

        {/* Method 2: Logical AND `&&` */}
        {/* Shows Book Details only if view is 'all' or 'books'. */}
        {(view === 'all' || view === 'books') && <BookInfo items={books} />}

        {/* Method 3: A standard If condition can be used, often with element variables. */}
        {(() => {
          if (view === 'all' || view === 'blogs') {
            return <BlogInfo items={blogs} />;
          }
        })()}
      </div>
    </div>
  );
}

export default App;