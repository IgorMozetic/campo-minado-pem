import { CODES } from '../constants';

export const generateLinearEquation = (targetValue) => {
  const coefficients = [2, 3, 4, 5, 6, 7, 8];
  const coefficient = coefficients[Math.floor(Math.random() * coefficients.length)];
  
  const constant = targetValue * coefficient;
  const operations = ['+', '-'];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  
  let addend, equation;
  
  if (operation === '+') {
    addend = Math.floor(Math.random() * 20) + 1;
    equation = `${coefficient}x + ${addend} = ${constant + addend}`;
  } else {
    addend = Math.floor(Math.random() * 20) + 1;
    if (constant - addend <= 0) {
      addend = Math.floor(Math.random() * (constant - 1)) + 1;
    }
    equation = `${coefficient}x - ${addend} = ${constant - addend}`;
  }
  
  return equation;
};

export const findSafeCell = (boardData, width, height) => {
  const safeCells = [];
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (boardData[y][x] !== CODES.MINE) {
        safeCells.push({ x, y });
      }
    }
  }
  
  if (safeCells.length === 0) {
    return { x: 0, y: 0 };
  }
  
  const randomCell = safeCells[Math.floor(Math.random() * safeCells.length)];
  return randomCell;
};

export const generateHint = (boardData, width, height) => {
  const safeCell = findSafeCell(boardData, width, height);
  
  const rowEquation = generateLinearEquation(safeCell.y + 1);
  const columnEquation = generateLinearEquation(safeCell.x + 1);
  
  return {
    rowEquation: `Linha: ${rowEquation}`,
    columnEquation: `Coluna: ${columnEquation}`,
    safeCell
  };
};