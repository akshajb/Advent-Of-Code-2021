const fs = require("fs");
const util = require("util");

function makeBingoArrays(strArray) {
  return strArray.map((str) => {
    const arr = str.split("\n").map((line) =>
      line
        .split(" ")
        .filter((char) => char !== "")
        .map((num) => {
          return { value: parseInt(num), marked: false };
        })
    );
    return arr;
  });
}

function makeColumnMajorBoards() {
  const columnBoards = [];
  for (let board of bingoBoards) {
    let cBoard = [];
    for (let r = 0; r < 5; r++) {
      let columnRow = [];
      for (let c = 0; c < 5; c++) {
        columnRow.push(board[c][r]);
      }
      cBoard.push(columnRow);
    }
    columnBoards.push(cBoard);
  }

  return columnBoards;
}

function markANumber(number) {
  bingoBoards.forEach((board) => {
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (board[r][c].value === number) {
          board[r][c].marked = true;
        }
      }
    }
  });
}

function checkWinCondition() {
  for (let index = 0; index < bingoBoards.length; index++) {
    //  row wise winner

    for (let row of bingoBoards[index]) {
      if (row.filter((num) => num.marked === true).length === 5) {
        boardForWin = bingoBoards[index];
        boardToDelete = index;
        return true;
      }
    }
  }

  for (let index = 0; index < columnMajorBoards.length; index++) {
    //  row wise winner

    for (let row of columnMajorBoards[index]) {
      if (row.filter((num) => num.marked === true).length === 5) {
        boardForWin = columnMajorBoards[index];
        boardToDelete = index;
        return true;
      }
    }
  }
}

function calculateScore(board, winNumber) {
  let sum = 0;

  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      if (board[r][c].marked === false) {
        sum += board[r][c].value;
      }
    }
  }
  return sum * winNumber;
}

const inputString = fs
  .readFileSync("./data/fourth.txt")
  .toString()
  .trim()
  .split("\n\n");

const numbersToDraw = inputString[0]
  .trim()
  .split(",")
  .map((x) => parseInt(x));

inputString.shift();

const bingoBoards = makeBingoArrays(inputString);
const columnMajorBoards = makeColumnMajorBoards();
let numberForWin = null;
let boardForWin = null;
let boardToDelete = null;

for (let i = 0; i < numbersToDraw.length; i++) {
  markANumber(numbersToDraw[i]);
  if (checkWinCondition()) {
    numberForWin = numbersToDraw[i];

    console.log(`Score is ${calculateScore(boardForWin, numberForWin)}`);
    if (bingoBoards.length > 1) {
      bingoBoards.splice(boardToDelete, 1);
      columnMajorBoards.splice(boardToDelete, 1);
    }
    boardToDelete = null;
  }
}

// console.log(checkWinCondition());
