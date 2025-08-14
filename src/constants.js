// Game Settings
export const MIN_WIDTH = 9;
export const MAX_WIDTH = 20;
export const MIN_HEIGHT = 9;
export const MAX_HEIGHT = 20;
export const MIN_MINES = 10;

// Difficulty Levels
export const DIFFICULTY = {
  EASY: "easy",
  HARD: "hard",
};

export const DIFFICULTY_CONFIGS = {
  [DIFFICULTY.EASY]: {
    width: 7,
    height: 7,
    mines: 8,
    label: "Fácil",
  },
  [DIFFICULTY.HARD]: {
    width: 9,
    height: 9,
    mines: 13,
    label: "Difícil",
  },
};

// Design Settings
export const CELL_SIZE = 10;
export const CELL_MARGIN = 2;

// Game States
export const GAME = {
  READY: "ready",
  RUN: "run",
  WIN: "win",
  LOSE: "lose",
};

// Cell States
export const CODES = {
  OPENED: 0,
  NOTHING: -1,
  FLAG: -2,
  QUESTION: -3,
  MINE: -4,
  MINE_FLAG: -5,
  MINE_QUESTION: -6,
};
