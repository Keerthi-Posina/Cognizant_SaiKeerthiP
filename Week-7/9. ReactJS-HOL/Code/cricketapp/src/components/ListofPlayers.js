import React from 'react';

function ListofPlayers({ players }) {
  return (
    <div>
      <ul>
        {players.map((item) => (
          <li key={item.name}>Mr. {item.name} {item.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;