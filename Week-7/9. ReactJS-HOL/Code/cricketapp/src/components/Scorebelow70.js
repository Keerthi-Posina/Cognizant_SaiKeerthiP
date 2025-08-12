import React from 'react';

function Scorebelow70({ players }) {
  const players70 = players.filter(player => player.score <= 70);

  return (
    <div>
      <ul>
        {players70.map((item) => (
          <li key={item.name}>Mr. {item.name} {item.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default Scorebelow70;