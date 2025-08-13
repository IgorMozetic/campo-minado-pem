import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GAME, CODES } from "../../constants";
import { openCell, rotateCellState } from "../../store/modules/control";
import { Cell } from "../../components";

function gerarEquacao(resposta) {
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 10) - 5;
  const resultadoFinal = a * resposta + b;
  return `${a}x ${b >= 0 ? "+" : "-"} ${Math.abs(b)} = ${resultadoFinal}`;
}

const CellContainer = ({ x, y }) => {
  const dispatch = useDispatch();
  const gameState = useSelector((rootState) => rootState.control.gameState);
  const cellCode = useSelector(
    (rootState) => rootState.control.boardData[y][x]
  );

  const getCellText = useCallback(
    (code) => {
      switch (code) {
        case CODES.OPENED:
        case CODES.NOTHING:
          return "";
        case CODES.FLAG:
          return "🚩";
        case CODES.MINE_FLAG:
          switch (gameState) {
            case GAME.WIN:
              return "💣";
            case GAME.LOSE:
              return "💥";
            default:
              return "🚩";
          }
        case CODES.QUESTION:
          return "❔";
        case CODES.MINE_QUESTION:
          switch (gameState) {
            case GAME.WIN:
              return "💣";
            case GAME.LOSE:
              return "💥";
            default:
              return "❔";
          }
        case CODES.MINE:
          switch (gameState) {
            case GAME.WIN:
              return "💣";
            case GAME.LOSE:
              return "💥";
            default:
              return "";
          }
        default:
          if (typeof code === "number" && code > 0) {
            return gerarEquacao(code);
          }
          return code;
      }
    },
    [gameState]
  );

  const onClickCell = useCallback(() => {
    if (gameState === GAME.READY || gameState === GAME.RUN) {
      dispatch(openCell(x, y));
    }
  }, [gameState]);

  const onRightClickCell = useCallback(
    (e) => {
      e.preventDefault();

      if (gameState === GAME.READY || gameState === GAME.RUN) {
        dispatch(rotateCellState(x, y));
      }
    },
    [gameState]
  );

  return (
    <Cell
      cellCode={cellCode}
      cellText={getCellText(cellCode)}
      onClickCell={onClickCell}
      onRightClickCell={onRightClickCell}
    />
  );
};

export default memo(CellContainer);
