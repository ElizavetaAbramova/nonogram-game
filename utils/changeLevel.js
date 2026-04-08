import {
  alienButton,
  levelPuzzlesBlock,
  levelsBlock,
  spiderButton,
  UFOButton,
} from "../components/buttons/levelButtons.js";
import {
  puzzleAlien,
  puzzleSpider,
  puzzleUFO,
} from "../components/puzzleTemplates.js";
import { cellClick } from "../handlers/cellClick.js";
import { startGame } from "../handlers/startGame.js";
import { setState, state, resetUserInput } from "../script.js";
import { clearField } from "./clearField.js";
import { clearMessage } from "./clearMessage.js";
import {
  counter,
  createGameArea,
  field,
  gameBoard,
  leftLine,
  topLine,
} from "../components/gameAreaField.js";

export function changeLevel(event) {
  const button = event.target;

  levelsBlock.childNodes.forEach((item) => item.classList.remove("active"));
  levelPuzzlesBlock.childNodes.forEach((item) => {
    item.classList.remove("active");
  });
  button.classList.add("active");
  topLine.innerHTML = "";
  leftLine.innerHTML = "";
  field.innerHTML = "";
  switch (button.classList[2]) {
    case "easy":
      setState("level", "easy");
      setState("difficulty", 5);
      setState("picture", puzzleAlien);

      levelPuzzlesBlock.childNodes.forEach((item) => {
        if (item.classList.contains("easy")) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
      alienButton.classList.add("active");
      gameBoard.classList.remove("hard");
      field.classList.remove("medium", "hard");
      field.classList.add("easy");
      topLine.classList.remove("medium", "hard");
      topLine.classList.add("easy");
      leftLine.classList.remove("medium", "hard");
      leftLine.classList.add("easy");
      createGameArea(state.level, state.picture);
      resetUserInput(state.difficulty);

      break;
    case "medium":
      setState("level", "medium");
      setState("difficulty", 10);
      setState("picture", puzzleSpider);

      spiderButton.classList.add("active");
      gameBoard.classList.remove("hard");
      field.classList.remove("easy", "hard");
      field.classList.add("medium");
      topLine.classList.remove("easy", "hard");
      topLine.classList.add("medium");
      leftLine.classList.remove("easy", "hard");
      leftLine.classList.add("medium");
      levelPuzzlesBlock.childNodes.forEach((item) => {
        if (item.classList.contains("medium")) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });

      createGameArea(state.level, state.picture);
      resetUserInput(state.difficulty);
      break;
    case "hard":
      setState("level", "hard");
      setState("difficulty", 15);
      setState("picture", puzzleUFO);

      UFOButton.classList.add("active");
      gameBoard.classList.add("hard");
      field.classList.remove("easy", "medium");
      field.classList.add("hard");
      topLine.classList.remove("medium", "easy");
      topLine.classList.add("hard");
      leftLine.classList.remove("medium", "easy");
      leftLine.classList.add("hard");
      levelPuzzlesBlock.childNodes.forEach((item) => {
        if (item.classList.contains("hard")) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
      createGameArea(state.level, state.picture);
      resetUserInput(state.difficulty);

      break;
  }

  counter.innerText = "";
  clearField();
  clearMessage();

  field.addEventListener("click", startGame);
  field.childNodes.forEach((item) => {
    item.addEventListener("click", cellClick);
    if (state.theme === "Light") {
      item.classList.add("dark");
    }
  });

  setState("isGameStarted", false);
  setState("isGameOver", false);
  setState("isGameContinue", false);
  setState("isSolutionShowed", false);
  setState("millisecondsGap", 0);
}
