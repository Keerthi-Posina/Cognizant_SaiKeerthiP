import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor'; // Import the new component

function App() {
  // State for the counter
  const [counter, setCounter] = useState(0);

  // Method to increment the counter
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  // Method to show a hello message
  const sayHello = () => {
    alert('Hello! Member1');
  };

  // Handler to invoke multiple functions on a single click
  const handleIncrement = () => {
    increment();
    sayHello();
  };

  // Method to decrement the counter
  const decrement = () => {
    setCounter(prevCounter => prevCounter - 1);
  };

  // Method that accepts an argument
  const sayMessage = (message) => {
    alert(message);
  };

  // Handler for the synthetic event
  const handlePress = (event) => {
    // You can inspect the event object in the console
    console.log(event);
    alert('I was clicked');
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Display the counter */}
      <h1>{counter}</h1>

      {/* 1. Button to invoke multiple methods */}
      <button onClick={handleIncrement}>Increment</button>
      &nbsp;

      {/* Button to decrement */}
      <button onClick={decrement}>Decrement</button>
      <br /><br />

      {/* 2. Button that passes an argument to its handler */}
      <button onClick={() => sayMessage('welcome')}>Say Welcome</button>
      &nbsp;

      {/* 3. Button that demonstrates a synthetic event */}
      <button onClick={handlePress}>Click on me</button>

      <hr style={{ margin: '20px 0' }} />

      {/* Render the CurrencyConvertor component */}
      <CurrencyConvertor />
    </div>
  );
}

export default App;