import {
  levelPuzzlesBlock,
  levelsBlock,
} from "../components/buttons/levelButtons.js";
import {
  counter,
  createGameArea,
  field,
  gameBoard,
  leftLine,
  topLine,
} from "../components/gameAreaField.js";
import { replaceUserInput, setState, state } from "../script.js";
import { clearField } from "../utils/clearField.js";
import { clearMessage } from "../utils/clearMessage.js";
import { startGame } from "./startGame.js";

export function continueGame() {
  if (localStorage) {
    setState("isSolutionShowed", false);
    clearField();
    clearMessage();
    setState("isGameContinue", true);
    setState("isGameOver", false);
    setState("isGameStarted", false);

    let savedInput = JSON.parse(localStorage.save);
    let savedPuzzle = JSON.parse(localStorage.puzzleArray);
    let puzzleButton = levelPuzzlesBlock.querySelector(
      `.${localStorage.puzzle}`,
    );
    let levelButton = levelsBlock.querySelector(`.${localStorage.level}`);
    setState("picture", savedPuzzle);
    replaceUserInput(savedInput.userInput);
    counter.innerText = localStorage.time;
    setState("level", localStorage.level);
    setState("savedGap", localStorage.gap);

    leftLine.innerText = "";
    topLine.innerText = "";
    field.innerHTML = "";
    field.classList.remove(field.classList[1]);
    leftLine.classList.remove(leftLine.classList[1]);
    topLine.classList.remove(topLine.classList[1]);

    createGameArea(localStorage.level, state.picture);

    field.childNodes.forEach((cell) => {
      if (localStorage.getItem(cell.classList[1])) {
        if (localStorage.getItem(cell.classList[1]) === "X") {
          cell.innerText = "X";
        }
        if (
          localStorage.getItem(cell.classList[1]) !== "X" &&
          state.theme === "Dark"
        ) {
          cell.classList.add("black");
        }
        if (
          localStorage.getItem(cell.classList[1]) !== "X" &&
          state.theme === "Light"
        ) {
          cell.classList.add("white");
        }
      }
    });

    levelsBlock.childNodes.forEach((item) => item.classList.remove("active"));
    levelPuzzlesBlock.childNodes.forEach((item) => {
      item.classList.remove("active");
      if (item.classList.contains(`${localStorage.level}`)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });

    if (gameBoard.classList.contains("hard")) {
      gameBoard.classList.remove("hard");
    }
    if (localStorage.level === "hard") {
      gameBoard.classList.add("hard");
    }

    field.addEventListener("click", startGame);
    levelButton.classList.add("active");
    puzzleButton.classList.add("active");
    leftLine.classList.add(`${localStorage.level}`);
    topLine.classList.add(`${localStorage.level}`);
    field.classList.add(`${localStorage.level}`);
    if (state.theme === "Light") {
      topLine.classList.add("dark");
      leftLine.classList.add("dark");
    }
  }
}
