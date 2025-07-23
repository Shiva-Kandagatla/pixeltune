# PixelTune

## Overview

PixelTune is a daily music-memory game. The goal is to reproduce a sequence of tones played on a 3x3 tile grid. Test your memory and share your results!

## Core Features

- **3x3 Tile Grid:** Each tile has a unique musical tone.
- **Sequence Playback:** A sequence of tones is played at the start of the game.
- **User Input:** Reproduce the sequence by clicking the tiles.
- **Attempt Limits:** You have a maximum of 3 attempts to reproduce the sequence correctly.
- **Feedback:** Get immediate feedback after each attempt.
- **Shareable Results:** Share your daily results with emojis.

## Tech Stack

- React (Vite)
- Tone.js

## Folder Structure

```
src/
  components/
    - TileGrid.jsx: Grid rendering and click handlers
    - Tile.jsx: Individual tile logic (color, sound)
  utils/
    - sounds.js: Note mapping and Tone.js functions
    - sequence.js: Hardcoded daily sequence (mock)
  App.jsx: Main logic and layout
  index.css: Minimal CSS
```

## Game Flow

1.  A sequence of tones is played at the beginning of the game.
2.  The user tries to reproduce the sequence by clicking on the tiles.
3.  After each attempt, the user receives feedback.
4.  The game ends when the user successfully reproduces the sequence or runs out of attempts.

## Hardcoded Config (Mock Backend)

The game uses a hardcoded daily sequence, maximum attempts, and tile notes for simplicity.

```javascript
const DAILY_SEQUENCE = [3, 1, 7, 6, 2];
const MAX_ATTEMPTS = 3;
const TILE_NOTES = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D#5'];
```

## Dependencies

-   [Tone.js](https://tonejs.github.io/): for audio.  Run `npm install tone`

## MVP Tasks

-   [x] Set up Vite + React
-   [x] Create Tile component with sound on click
-   [x] Build TileGrid component (3x3 grid)
-   [x] Add sequence playback on mount (Tone.js)
-   [x] Track user input, compare to sequence
-   [x] Display success/fail feedback + attempt counter
-   [x] Add shareable emoji result string
-   [x] Style minimally for mobile + desktop
-   [x] Added showNumbers state to App.jsx

## Theme: Crystal Harmonies

The game features a "Crystal Harmonies" theme, where each tile represents a magical crystal resonating with a unique musical frequency.

## Future Enhancements

-   Animate tiles on playback
-   Add streaks and scores (when backend is ready)
-   Accessibility support (visual + audio)
-   Difficulty levels (longer tunes)
-   PWA support
