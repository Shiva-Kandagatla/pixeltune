# PixelTune

## Overview

PixelTune is a music-memory game. The goal is to reproduce a sequence of tones played on a 3x3 tile grid. Test your memory and share your results!

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

## Game Flow

1.  A sequence of tones is played at the beginning of the game.
2.  The user tries to reproduce the sequence by clicking on the tiles.
3.  After each attempt, the user receives feedback.
4.  The game ends when the user successfully reproduces the sequence or runs out of attempts.

## Dependencies

-   [Tone.js](https://tonejs.github.io/): for audio.  Run `npm install tone`

