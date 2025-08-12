import React from 'react';

// Import Components
import PlayerList from './components/ListofPlayers';
import BelowSeventy from './components/Scorebelow70';
import OddList from './components/OddPlayers';
import EvenList from './components/EvenPlayers';
import IndianList from './components/ListofIndianPlayers';

// Import Data
import { IndianPlayers } from './components/Players';

function CricketApp() {
  // Set this flag to true or false to switch between outputs
  const showPlayers = true;

  // Data for the 'flag = true' scenario
  const playerData = [
    { name: 'Jack', score: 50 },
    { name: 'Michael', score: 70 },
    { name: 'John', score: 40 },
    { name: 'Ann', score: 61 },
    { name: 'Elisabeth', score: 61 },
    { name: 'Sachin', score: 95 },
    { name: 'Dhoni', score: 100 },
    { name: 'Virat', score: 84 },
    { name: 'Jadeja', score: 64 },
    { name: 'Raina', score: 75 },
    { name: 'Rohit', score: 80 }
  ];

  // Data for the 'flag = false' scenario
  const indianTeamData = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvaraj5', 'Raina6'];

  if (showPlayers) {
    return (
      <div>
        <h1>Player List</h1>
        <PlayerList players={playerData} />
        <hr />
        <h1>Players with Scores Below 70</h1>
        <BelowSeventy players={playerData} />
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h1>Indian Team</h1>
          <hr />
          <h1>Odd Players</h1>
          <OddList players={indianTeamData} />
          <hr />
          <h1>Even Players</h1>
          <EvenList players={indianTeamData} />
        </div>
        <hr />
        <h1>List of Indian Players Merged:</h1>
        <IndianList IndianPlayers={IndianPlayers} />
      </div>
    );
  }
}

export default CricketApp;