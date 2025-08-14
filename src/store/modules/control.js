import produce from 'immer';
import {
	MIN_WIDTH,
	MIN_HEIGHT,
	MIN_MINES,
	GAME,
	CODES,
	DIFFICULTY,
	DIFFICULTY_CONFIGS
} from '../../constants';
import {
	initBoard,
	expandOpenedCell,
	getNextCellCode,
	getFlagIncDec
} from '../../lib/minesweeper';
import { generateHint } from '../../lib/hintGenerator';

const SHOW_SETTINGS = 'control/SHOW_SETTINGS';
const HIDE_SETTINGS = 'control/HIDE_SETTINGS';
const SET_GAME = 'control/SET_GAME';
const SET_DIFFICULTY = 'control/SET_DIFFICULTY';
const RESTART_GAME = 'control/RESTART_GAME';
const UPDATE_ELAPSED_TIME = 'control/UPDATE_ELAPSED_TIME';
const OPEN_CELL = 'control/OPEN_CELL';
const ROTATE_CELL_STATE = 'control/ROTATE_CELL_STATE';
const SHOW_HINT = 'control/SHOW_HINT';
const HIDE_HINT = 'control/HIDE_HINT';

export const showSettings = () => ({ type: SHOW_SETTINGS });
export const hideSettings = () => ({ type: HIDE_SETTINGS });
export const setGame = (width, height, mineCount) => ({ type: SET_GAME, width, height, mineCount });
export const setDifficulty = (difficulty) => ({ type: SET_DIFFICULTY, difficulty });
export const restartGame = () => ({ type: RESTART_GAME });
export const updateElapsedTime = () => ({ type: UPDATE_ELAPSED_TIME });
export const openCell = (x, y) => ({ type: OPEN_CELL, x, y });
export const rotateCellState = (x, y) => ({ type: ROTATE_CELL_STATE, x, y });
export const showHint = () => ({ type: SHOW_HINT });
export const hideHint = () => ({ type: HIDE_HINT });

const easyConfig = DIFFICULTY_CONFIGS[DIFFICULTY.EASY];
const initialBoardData = initBoard(easyConfig.width, easyConfig.height, easyConfig.mines);

const initialState = {
	enableSettings: false,
	gameState: GAME.READY,
	enableTimer: false,
	elapsedTime: 0,
	boardData: initialBoardData,
	width: easyConfig.width,
	height: easyConfig.height,
	mineCount: easyConfig.mines,
	difficulty: DIFFICULTY.EASY,
	flagCount: 0,
	openedCellCount: 0,
	showHint: true,
	hint: generateHint(initialBoardData, easyConfig.width, easyConfig.height)
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SHOW_SETTINGS:
			return produce(state, draft => {
				draft.enableSettings = true;
			});
		case HIDE_SETTINGS:
			return produce(state, draft => {
				draft.enableSettings = false;
			});
		case SET_GAME:
			return produce(state, draft => {
				draft.width = action.width;
				draft.height = action.height;
				draft.mineCount = action.mineCount;
			});
		case SET_DIFFICULTY:
			return produce(state, draft => {
				const config = DIFFICULTY_CONFIGS[action.difficulty];
				draft.difficulty = action.difficulty;
				draft.width = config.width;
				draft.height = config.height;
				draft.mineCount = config.mines;
			});
		case RESTART_GAME:
			return produce(state, draft => {
				draft.gameState = GAME.READY;
				draft.enableTimer = false;
				draft.elapsedTime = 0;
				draft.boardData = initBoard(state.width, state.height, state.mineCount);
				draft.flagCount = 0;
				draft.openedCellCount = 0;
				draft.showHint = true;
				draft.hint = generateHint(draft.boardData, state.width, state.height);
			});
		case UPDATE_ELAPSED_TIME:
			return produce(state, draft => {
				draft.elapsedTime++;
			});
		case OPEN_CELL:
			return produce(state, draft => {
				const code = state.boardData[action.y][action.x];
				draft.gameState = GAME.RUN;

				// Start timer if click on cell
				if (!state.enableTimer) {
					draft.enableTimer = true;
				}

				if (code === CODES.MINE) {
					draft.gameState = GAME.LOSE;
					draft.enableTimer = false;
				}
				else if (code === CODES.NOTHING) {
					const expandResult = expandOpenedCell(draft.boardData, action.x, action.y);
					draft.boardData = expandResult.boardData;
					draft.openedCellCount += expandResult.openedCellCount;

					// Win
					if (state.width * state.height - state.mineCount === draft.openedCellCount) {
						draft.gameState = GAME.WIN;
						draft.enableTimer = false;
					}
				}
			});
		case ROTATE_CELL_STATE:
			return produce(state, draft => {
				const code = state.boardData[action.y][action.x];

				if (code !== CODES.OPENED) {
					draft.boardData[action.y][action.x] = getNextCellCode(code);
					draft.flagCount += getFlagIncDec(code);
				}
			});
		case SHOW_HINT:
			return produce(state, draft => {
				draft.showHint = true;
			});
		case HIDE_HINT:
			return produce(state, draft => {
				draft.showHint = false;
			});
		default:
			return state;
	}
}