import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
import TileGrid from './components/TileGrid';
import { generateSequence, MAX_ATTEMPTS } from './utils/sequence';
import { TILE_NOTES, playNote } from './utils/sounds';
import './App.css';

function App() {

  const [userSequence, setUserSequence] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [currentlyPlayingIndex, setCurrentlyPlayingIndex] = useState(null);
  const [tileStatus, setTileStatus] = useState({}); // New state for tile feedback
  const [replaysLeft, setReplaysLeft] = useState(null); // Replay counter
  const [difficulty, setDifficulty] = useState(null);
  const [sequence, setSequence] = useState([]);

  const handleStartGame = async (selectedDifficulty) => {
  await Tone.start();
  setDifficulty(selectedDifficulty);
  setReplaysLeft(selectedDifficulty == 'normal' ? 3 : 1)
  const newSequence = generateSequence(selectedDifficulty);
  setSequence(newSequence);
  setGameStarted(true);
  // Add debug logging
  console.log("Starting game with sequence:", newSequence);
  playSequence(newSequence, selectedDifficulty);
};

const playSequence = async (sequenceToPlay, difficultyToPlay, isReplay = false) => {
  if (isReplay) {
    if (replaysLeft > 0) {
      setReplaysLeft(replaysLeft - 1);
    } else {
      setFeedback("No replays left!");
      return;
    }
  }
  setIsPlaying(true);
  // Add debug logging
  console.log("Playing sequence:", sequenceToPlay, "difficulty:", difficultyToPlay);
  // Add a delay before playing the sequence
  await new Promise((resolve) => setTimeout(resolve, 500));
  for (const noteIndex of sequenceToPlay) {
    setCurrentlyPlayingIndex(noteIndex);
    // Add error handling for playNote
    try {
      playNote(noteIndex, difficultyToPlay);
    } catch (error) {
      console.error("Error playing note:", error);
    }
    await new Promise((resolve) => setTimeout(resolve, 400));
    setCurrentlyPlayingIndex(null);
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  setIsPlaying(false);
  setFeedback(`Your turn. Try recreating the sequence...`);
};

const handleTileClick = (tileIndex) => {
  if (isPlaying || attempts >= MAX_ATTEMPTS) return;

  const currentStep = userSequence.length;
  const isCorrect = sequence[currentStep] === tileIndex;

  try {
    playNote(tileIndex, difficulty);
  } catch (error) {
    console.error("Error playing user note:", error);
  }

  setTileStatus({ [tileIndex]: isCorrect ? 'correct' : 'incorrect' });
  setTimeout(() => setTileStatus({}), 300); // Clear feedback

  if (isCorrect) {
    const newUserSequence = [...userSequence, tileIndex];
    setUserSequence(newUserSequence);

    if (newUserSequence.length === sequence.length) {
      setFeedback(`🎉 Success! You got it in ${attempts + 1} attempt(s).`);
      setAttempts(MAX_ATTEMPTS); // Lock game
    }
  } else {
    setAttempts(attempts + 1);
    setUserSequence([]); // Reset sequence
    if (attempts + 1 >= MAX_ATTEMPTS) {
      sequence.map((val, index)=>{sequence[index] = val+1})
      setFeedback(`❌ Game over! The sequence was: ${sequence.join(', ')}`);
    } else {
      setFeedback(`❌ Incorrect. Try again! (${attempts + 1}/${MAX_ATTEMPTS})`);
    }
  }
};

  const generateShareString = () => {
    const attemptString = `PixelTune - ${new Date().toLocaleDateString()}\nAttempts: ${attempts + 1}/${MAX_ATTEMPTS}\n`;
    const sequenceString = sequence.map(index => {
      const colors = ['🟥', '🟩', '🟦', '🟨', '🟪', '🟧', '🟫', '⬜️', '⬛️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤'];
      return colors[index];
    }).join('');
    return attemptString + sequenceString;
  };

  const handleShare = () => {
    navigator.clipboard.writeText(generateShareString());
    setFeedback('Results copied to clipboard!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>PixelTune</h1>
        <p>Recreate the sequence.</p>
      </header>
      {!gameStarted ? (
        <div className="difficulty-selection">
          <button onClick={() => handleStartGame('normal')}>Normal Mode (3x3)</button>
          <button onClick={() => handleStartGame('hard')}>Hard Mode (4x4)</button>
        </div>
      ) : (
        <>
          <TileGrid onTileClick={handleTileClick} currentlyPlayingIndex={currentlyPlayingIndex} tileStatus={tileStatus} difficulty={difficulty} />
          <div className="feedback">{feedback}</div>
          {attempts >= MAX_ATTEMPTS && (
            <button onClick={handleShare}>Share Result</button>
          )}
          {
            attempts < MAX_ATTEMPTS && (
              <button onClick={() => playSequence(sequence, difficulty, true)} disabled={isPlaying || replaysLeft === 0}>
            Replay Sequence ({replaysLeft} left)
          </button>
            )
          }
        </>
      )}
    </div>
  );
}

export default App;
