
export const MAX_ATTEMPTS = 3;
export const generateSequence = (difficulty) => {
  const sequenceLength = difficulty === 'normal' ? 5 : 7;
  const gridSize = difficulty === 'normal' ? 9 : 16;
  
  // For a real game, you'd want a better random sequence generator
  const sequence = [];
  for (let i = 0; i < sequenceLength; i++) {
    sequence.push(Math.floor(Math.random() * gridSize));
  }
  return sequence;
};
