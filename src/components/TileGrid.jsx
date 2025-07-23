import React from 'react';
import Tile from './Tile';
import { TILE_NOTES } from '../utils/sounds';
import { SHAPES } from './Tile';

const TileGrid = ({ onTileClick, currentlyPlayingIndex, tileStatus, difficulty }) => {
  const notes = TILE_NOTES[difficulty];
  const gridSize = difficulty === 'normal' ? 3 : 4;

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
    gap: '1.5rem',
    maxWidth: difficulty === 'normal' ? '400px' : '550px',
  };

  return (
    <div style={gridStyle}>
      {notes.map((note, index) => (
        <Tile
          key={index}
          tileIndex={index}
          onClick={() => onTileClick(index)}
          isPlaying={currentlyPlayingIndex === index}
          status={tileStatus[index]}
          difficulty={difficulty}
          shape={SHAPES[index % SHAPES.length]}
        />
      ))}
    </div>
  );
};

export default TileGrid;
