import React from 'react';

export const SHAPES = [
  
];

const TILE_STYLES = {
  normal: [
    { backgroundColor: '#9b59b6', boxShadow: '0 0 10px #9b59b6', borderRadius: '50%' }, // Amethyst
    { backgroundColor: '#e74c3c', boxShadow: '0 0 10px #e74c3c', borderRadius: '30%' }, // Rose Quartz
    { backgroundColor: '#f1c40f', boxShadow: '0 0 10px #f1c40f', borderRadius: '50%' }, // Citrine
    { backgroundColor: '#3498db', boxShadow: '0 0 10px #3498db', borderRadius: '20%' }, // Aquamarine
    { backgroundColor: '#2ecc71', boxShadow: '0 0 10px #2ecc71', borderRadius: '50%' }, // Emerald
    { backgroundColor: '#e67e22', boxShadow: '0 0 10px #e67e22', borderRadius: '30%' }, // Ruby
    { backgroundColor: '#34495e', boxShadow: '0 0 10px #34495e', borderRadius: '50%' }, // Sapphire
    { backgroundColor: '#95a5a6', boxShadow: '0 0 10px #95a5a6', borderRadius: '20%' }, // Diamond
    { backgroundColor: '#f39c12', boxShadow: '0 0 10px #f39c12', borderRadius: '50%' }, // Obsidian
  ],
  hard: [
    { backgroundColor: '#9b59b6', boxShadow: '0 0 10px #9b59b6', borderRadius: '50%' }, // Amethyst
    { backgroundColor: '#e74c3c', boxShadow: '0 0 10px #e74c3c', borderRadius: '10%' }, // Rose Quartz
    { backgroundColor: '#f1c40f', boxShadow: '0 0 10px #f1c40f', borderRadius: '20%' }, // Citrine
    { backgroundColor: '#3498db', boxShadow: '0 0 10px #3498db', borderRadius: '50%' }, // Aquamarine
    { backgroundColor: '#2ecc71', boxShadow: '0 0 10px #2ecc71', borderRadius: '20%' }, // Emerald
    { backgroundColor: '#e67e22', boxShadow: '0 0 10px #e67e22', borderRadius: '30%' }, // Ruby
    { backgroundColor: '#34495e', boxShadow: '0 0 10px #34495e', borderRadius: '50%' }, // Sapphire
    { backgroundColor: '#95a5a6', boxShadow: '0 0 10px #95a5a6', borderRadius: '40%' }, // Diamond
    { backgroundColor: '#f39c12', boxShadow: '0 0 10px #f39c12', borderRadius: '30%' }, // Obsidian
    { backgroundColor: '#d35400', boxShadow: '0 0 10px #d35400', borderRadius: '50%' }, // Garnet
    { backgroundColor: '#16a085', boxShadow: '0 0 10px #16a085', borderRadius: '30%' }, // Peridot
    { backgroundColor: '#8e44ad', boxShadow: '0 0 10px #8e44ad', borderRadius: '10%' }, // Tourmaline
    { backgroundColor: '#c0392b', boxShadow: '0 0 10px #c0392b', borderRadius: '90%' }, // Opal
    { backgroundColor: '#7f8c8d', boxShadow: '0 0 10px #7f8c8d', borderRadius: '20%' }, // Quartz
    { backgroundColor: '#2980b9', boxShadow: '0 0 10px #2980b9', borderRadius: '50%' }, // Jade
    { backgroundColor: '#8e44ad', boxShadow: '0 0 10px #8e44ad', borderRadius: '30%' }, // Lapis Lazuli
  ]
};

const Tile = ({ tileIndex, isPlaying, onClick, status, difficulty }) => {
  const baseStyle = {
    width: 'clamp(60px, 10vw, 100px)',
    height: 'clamp(60px, 10vw, 100px)',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    border: '2px solid transparent',
    borderRadius: '10px',
  };

  const activeStyle = {
    transform: 'scale(1.1)',
    borderColor: '#fff',
    boxShadow: '0 0 20px 10px #fff',
  };

  const statusStyle = {
    correct: { backgroundColor: '#28a745' },
    incorrect: { backgroundColor: '#dc3545' },
  };

  const style = {
    ...baseStyle,
    ...TILE_STYLES[difficulty][tileIndex],
    ...(isPlaying ? activeStyle : {}),
    ...(status ? statusStyle[status] : {}),
  };

  return (
    <div 
  className={`tile-container ${status}`} 
  style={{ ...style, backgroundColor: status ? statusStyle[status].backgroundColor : style.backgroundColor }}
>
      <svg 
        className="tile-svg" 
        viewBox="0 0 24 24"
        onClick={() => onClick(tileIndex)}
        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <path d={SHAPES[tileIndex % SHAPES.length]} fill="currentColor" />
      </svg>
    </div>
  );
};

export default Tile;
