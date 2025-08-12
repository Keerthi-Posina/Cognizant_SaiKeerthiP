import React from 'react';

function UserDashboard() {
  const bookTicket = (flightName) => {
    alert(`Your ticket for ${flightName} has been booked successfully!`);
  };

  return (
    <div>
      <h2>Welcome back</h2>
      <h3>Available Flights</h3>
      <p>
        Flight 6E 234: Hyderabad to Bengaluru
        <button onClick={() => bookTicket('Flight 6E 234')} style={{marginLeft: '10px'}}>Book Ticket</button>
      </p>
      <p>
        Flight AI 560: Delhi to Mumbai
        <button onClick={() => bookTicket('Flight AI 560')} style={{marginLeft: '10px'}}>Book Ticket</button>
      </p>
      <p>
        Flight UK 820: Chennai to Kolkata
        <button onClick={() => bookTicket('Flight UK 820')} style={{marginLeft: '10px'}}>Book Ticket</button>
      </p>
    </div>
  );
}

export default UserDashboard;