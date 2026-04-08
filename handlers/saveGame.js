import {
  levelPuzzlesBlock,
  levelsBlock,
} from "../components/buttons/levelButtons.js";
import { counter, field } from "../components/gameAreaField.js";
import { setState, state, userInput } from "../script.js";

export function saveGame() {
  if (localStorage) {
    setState("savedList", localStorage.topList);
    localStorage.clear();
  }

  let level = levelsBlock.querySelector(".active");
  let puzzle = levelPuzzlesBlock.querySelector(".active");

  localStorage.setItem("puzzle", puzzle.classList[2]);
  localStorage.setItem("level", level.classList[2]);
  localStorage.setItem("time", counter.innerText);
  localStorage.setItem("difficulty", state.difficulty);
  localStorage.setItem("puzzleArray", JSON.stringify(state.picture));
  localStorage.setItem("save", JSON.stringify({ userInput }));
  localStorage.setItem("gap", state.millisecondsGap);
  localStorage.setItem("topList", state.savedList);

  field.childNodes.forEach((cell) => {
    let cellKey = cell.classList[1];
    let cellValue = "";
    if (cell.classList.contains("black")) {
      cellValue = "black";
      localStorage.setItem(cellKey, cellValue);
    }
    if (cell.classList.contains("white")) {
      cellValue = "white";
      localStorage.setItem(cellKey, cellValue);
    }
    if (cell.innerText !== "") {
      cellValue = cell.innerText;
      localStorage.setItem(cellKey, cellValue);
    }
  });
}
