import * as Tone from 'tone';

const synths = [
  new Tone.Synth({ oscillator: { type: 'fmsine', modulationIndex: 0.5, harmonicity: 3 }, envelope: { attack: 0.03, decay: 0.3, sustain: 0.2, release: 0.7 } }).toDestination(),
  new Tone.Synth({ oscillator: { type: 'triangle' }, envelope: { attack: 0.1, decay: 0.4, sustain: 0.3, release: 0.8 } }).toDestination(),
  new Tone.Synth({ oscillator: { type: 'fmsine', modulationIndex: 0.5, harmonicity: 3 }, envelope: { attack: 0.05, decay: 0.2, sustain: 0.5, release: 0.5 } }).toDestination(),
  new Tone.Synth({ oscillator: { type: 'sine' }, envelope: { attack: 0.3, decay: 0.6, sustain: 0.1, release: 0.9 } }).toDestination(),
  new Tone.Synth({ oscillator: { type: 'square' }, envelope: { attack: 0.08, decay: 0.3, sustain: 0.4, release: 0.6 } }).toDestination(),
  new Tone.Synth({ oscillator: { type: 'sawtooth', detune: 12 }, envelope: { attack: 0.02, decay: 0.2, sustain: 0.6, release: 0.4 } }).toDestination(),
  new Tone.Synth({ oscillator: { type: 'triangle', modulationIndex: 0.8, harmonicity: 2 }, envelope: { attack: 0.1, decay: 0.3, sustain: 0.2, release: 0.5 } }).toDestination(),
  new Tone.Synth({ oscillator: { type: 'triangle' }, envelope: { attack: 0.2, decay: 0.5, sustain: 0.1, release: 0.6 } }).toDestination(),
  new Tone.Synth({ oscillator: { type: 'pulse' }, envelope: { attack: 0.04, decay: 0.1, sustain: 0.7, release: 0.3 } }).toDestination(),
  new Tone.Synth({ oscillator: { type: 'fmsquare', modulationIndex: 0.3, harmonicity: 5 }, envelope: { attack: 0.03, decay: 0.3, sustain: 0.2, release: 0.7 } }).toDestination(),
  new Tone.Synth({ oscillator: { type: 'sawtooth', detune: 8 }, envelope: { attack: 0.06, decay: 0.5, sustain: 0.3, release: 0.5 } }).toDestination(),
  new Tone.Synth({ oscillator: { type: 'amsine', modulationIndex: 0.6, harmonicity: 4 }, envelope: { attack: 0.09, decay: 0.4, sustain: 0.4, release: 0.8 } }).toDestination(),
  new Tone.Synth({ oscillator: { type: 'sawtooth', detune: 10 }, envelope: { attack: 0.12, decay: 0.2, sustain: 0.5, release: 0.9 } }).toDestination(),
  new Tone.Synth({ oscillator: { type: 'square', detune: 4 }, envelope: { attack: 0.15, decay: 0.3, sustain: 0.6, release: 0.7 } }).toDestination(),
  new Tone.Synth({ oscillator: { type: 'fmsquare', modulationIndex: 0.7, harmonicity: 6 }, envelope: { attack: 0.18, decay: 0.4, sustain: 0.7, release: 0.5 } }).toDestination(),
  new Tone.Synth({ oscillator: { type: 'amsine', modulationIndex: 0.9, harmonicity: 3 }, envelope: { attack: 0.21, decay: 0.5, sustain: 0.8, release: 0.3 } }).toDestination(),
];

export const TILE_NOTES = {
  normal: ['C4', 'G4', 'E4', 'A4', 'D4', 'B4', 'F#4', 'C5', 'G3'],
  hard: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5', 'C6', 'D6'],
};

export const playNote = (noteIndex, difficulty) => {
  const note = TILE_NOTES[difficulty][noteIndex];
  const synth = synths[noteIndex % synths.length];
  synth.triggerAttackRelease(note, '8n');
};
