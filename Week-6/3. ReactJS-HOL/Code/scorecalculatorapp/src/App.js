import React from 'react';
import ScoreCalculator from './Components/CalculateScore';
import './App.css';

function ScoreApp() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Score Calculator 📊</h1>
        <ScoreCalculator
          Name="Priya Sharma"
          School="Delhi Public School"
          Total={475}
          goal={500}
        />
        <ScoreCalculator
          Name="Rohan Mehta"
          School="Modern School"
          Total={380}
          goal={400}
        />
      </header>
    </div>
  );
}

export default ScoreApp;