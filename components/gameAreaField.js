import { createElementInHTML } from "./createElementInHTML.js";
import { cellClick } from "../handlers/cellClick.js";
import { startGame } from "../handlers/startGame.js";
import { setState, state } from "../script.js";

export const counter = createElementInHTML("div", "", "counter");
export const topLine = createElementInHTML("div", "", "top-line", "easy");
export const leftLine = createElementInHTML("div", "", "left-line", "easy");
export const field = createElementInHTML("div", "", "field", "easy");

field.addEventListener("click", startGame);
field.addEventListener("contextmenu", (event) => event.preventDefault());
field.addEventListener("contextmenu", startGame);

export const gameBoard = createElementInHTML("div", "", "game-board");
gameBoard.append(counter, topLine, leftLine, field);

function fillTopLine(matrix) {
  let count = 0;
  let string = "";
  for (let i = 0; i < matrix.length; i++) {
    let cellWithString = document.createElement("div");
    let span = document.createElement("span");
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[j][i] === 1) {
        count++;
      }
      if (matrix[j][i] === 0 && count !== 0) {
        string = string + "\n" + count;
        count = 0;
      } else if (count !== 0 && j === matrix[i].length - 1) {
        string = string + "\n" + count;
      }
    }
    if (i % 5 === 0) {
      cellWithString.style.borderLeft = "3px solid";
    }
    cellWithString.classList.add("cell", `cell-${i}`);
    if (!cellWithString.classList.contains("dark") && state.theme === "Light") {
      cellWithString.classList.add("dark");
    }
    span.innerText = string;
    cellWithString.append(span);
    topLine.append(cellWithString);
    string = "";
    count = 0;
  }
}

function fillLeftLine(matrix) {
  let count = 0;
  let string = "";
  for (let i = 0; i < matrix.length; i++) {
    let cellWithString = document.createElement("div");
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        count++;
      }
      if (matrix[i][j] === 0 && count !== 0) {
        string = string + count + " ";
        count = 0;
      }
      if (count !== 0 && j === matrix[i].length - 1) {
        string = string + count;
      }
    }
    if (i % 5 === 0) {
      cellWithString.style.borderTop = "3px solid";
    }
    cellWithString.classList.add("cell", `cell-${i}`);
    if (!cellWithString.classList.contains("dark") && state.theme === "Light") {
      cellWithString.classList.add("dark");
    }
    cellWithString.innerText = string;
    leftLine.append(cellWithString);
    string = "";
    count = 0;
  }
}

export function createGameArea(level, puzzle) {
  fillTopLine(puzzle);
  fillLeftLine(puzzle);
  switch (level) {
    case "easy":
      setState("difficulty", 5);
      break;
    case "medium":
      setState("difficulty", 10);
      break;
    case "hard":
      setState("difficulty", 15);
      break;
  }

  for (let i = 0; i < state.difficulty; i++) {
    for (let j = 0; j < state.difficulty; j++) {
      const cell = createElementInHTML("div", "", "cell", `cell-${i}-${j}`);
      cell.addEventListener("click", cellClick);
      cell.addEventListener("contextmenu", cellClick);
      field.append(cell);
      if (!cell.classList.contains("dark") && state.theme === "Light") {
        cell.classList.add("dark");
      }
      if (i % 5 === 0) {
        cell.style.borderTop = "3px solid";
      }
      if (j % 5 === 0) {
        cell.style.borderLeft = "3px solid";
      }
    }
  }
}

export function clearGameArea() {
  field.childNodes.forEach((node) => {
    node.classList.remove("black");
    node.classList.remove("white");
    node.innerText = "";
  });

  counter.innerText = "00:00";
}
