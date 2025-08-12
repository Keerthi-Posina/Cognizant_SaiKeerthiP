import React, { useState } from 'react';

function CurrencyConvertor() {
  // State to hold the input amount in Rupees
  const [amount, setAmount] = useState('');

  // Handles changes in the input field
  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  // Handles the form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Assuming a conversion rate of 1 Euro = 90 INR
    const euroAmount = amount * 90;
    alert(`Converting to Euro Amount is ${euroAmount}`);
  };

  return (
    <div>
      <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input type="number" value={amount} onChange={handleChange} />
        </label>
        <br /><br />
        <label>
          Currency:
          <input type="text" value="Euro" readOnly />
        </label>
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConvertor;