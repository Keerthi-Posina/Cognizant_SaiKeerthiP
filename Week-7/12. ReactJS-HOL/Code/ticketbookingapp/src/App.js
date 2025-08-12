import React, { useState } from 'react';
import UserPage from './UserPage';
import GuestPage from './GuestPage';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

// Greeting component decides which page to show
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserPage />;
  }
  return <GuestPage />;
}

function App() {
  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handlers to update the state
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  // Conditionally render the correct button
  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Ticket Booking App</h1>
      {/* The Greeting component displays the relevant page */}
      <Greeting isLoggedIn={isLoggedIn} />
      {/* Display either the Login or Logout button */}
      {button}
    </div>
  );
}

export default App;