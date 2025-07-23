// PixelTune Frontend Plan (React + Vite)

// --- Overview ---
// A daily music-memory game: play a sequence of tones mapped to a 3x3 tile grid and reproduce it.
// Stack: React (Vite) + Tone.js

// --- Core Features ---
// - 3x3 tile grid, each tile has a unique tone
// - Sequence playback on game start (flashes + sound)
// - User reproduces sequence by clicking tiles
// - Max 3 attempts
// - Feedback shown after each attempt
// - Shareable daily result (emojis)

// --- Folder Structure (inside src/) ---
// components/
//   - TileGrid.jsx       // Grid rendering, click handlers
//   - Tile.jsx           // Individual tile logic (color, sound)
//   - Header.jsx         // Title and game status
//   - Footer.jsx         // Attempt tracker, share button
// utils/
//   - sounds.js          // Note mapping + Tone.js functions
//   - sequence.js        // Hardcoded daily sequence (mock)
// App.jsx               // Main logic and layout
// index.css             // Minimal CSS or Tailwind (if added)

// --- Tile Grid ---
// - 3x3 layout using CSS Grid
// - Each tile triggers a unique tone on click
// - Tile index maps to note (C4 to D#5)

// --- Game Flow ---
// 1. On mount, play hardcoded sequence (e.g., [3, 1, 7, 6, 2])
// 2. User input recorded as tile clicks
// 3. After each full attempt:
//    - Compare input vs sequence
//    - Show success/failure feedback
//    - If success, lock game
//    - If 3 failed attempts, reveal answer

// --- Hardcoded Config (mock backend) ---
const DAILY_SEQUENCE = [3, 1, 7, 6, 2];
const MAX_ATTEMPTS = 3;
const TILE_NOTES = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D#5'];

// --- Dependencies ---
// - Tone.js for audio (npm install tone)

// --- MVP Tasks ---
// ✅ Set up Vite + React
// ✅ Create Tile component with sound on click
// ✅ Build TileGrid component (3x3 grid)
// ✅ Add sequence playback on mount (Tone.js)
// ✅ Track user input, compare to sequence
// ✅ Display success/fail feedback + attempt counter
// ✅ Add shareable emoji result string
// ✅ Style minimally for mobile + desktop
// - Added showNumbers state to App.jsx

// --- Theme: "Crystal Harmonies" ---
// - The grid represents a collection of magical crystals, each resonating with a unique musical frequency.
// - Tiles will have unique visuals and sounds based on their crystal type (e.g., Amethyst, Rose Quartz, Citrine).
// - The background will be a dark, velvety texture with subtle star patterns.
// - Sounds will be synthesized with Tone.js to match the theme.

// --- Future Enhancements ---
// - Animate tiles on playback
// - Add streaks and scores (when backend is ready)
// - Accessibility support (visual + audio)
// - Difficulty levels (longer tunes)
// - PWA support
