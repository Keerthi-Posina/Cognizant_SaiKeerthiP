import React from 'react';
import './App.css'; // Import the CSS file

function App() {
  // 1. Create an element for the heading
  const element = "Office Space";

  // 2. Create an object for office details
  const officeDetails = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  // 3. Define the image URL and create the JSX attribute
  const imageUrl = "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg";
  const jsxatt = <img src={imageUrl} width="25%" height="25%" alt="Office Space"/>;

  // 4. Logic for conditional styling
  const rentColorClass = officeDetails.Rent <= 60000 ? 'textRed' : 'textGreen';

  return (
    <div className="App">
      {/* Render the heading element */}
      <h1>{element}, at Affordable Range</h1>

      {/* Render the image attribute */}
      {jsxatt}

      {/* Render the object details */}
      <h1>Name: {officeDetails.Name}</h1>
      <h3 className={rentColorClass}>Rent: Rs. {officeDetails.Rent}</h3>
      <h3>Address: {officeDetails.Address}</h3>
    </div>
  );
}

export default App;