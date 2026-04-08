import {
  levelPuzzlesBlock,
  levelsBlock,
} from "../components/buttons/levelButtons.js";
import {
  createGameArea,
  field,
  gameBoard,
  leftLine,
  topLine,
} from "../components/gameAreaField.js";
import {
  puzzleAlien,
  puzzleAndroid,
  puzzleAstronaut,
  puzzleBigRocket,
  puzzleCandy,
  puzzleCity,
  puzzleDinosaur,
  puzzleFlower,
  puzzleMartian,
  puzzleRobot,
  puzzleRocket,
  puzzlesEasy,
  puzzlesHard,
  puzzlesMedium,
  puzzleSpaceFood,
  puzzleSpider,
  puzzleTree,
  puzzleUFO,
} from "../components/puzzleTemplates.js";
import { resetUserInput, setState, state } from "../script.js";
import { clearField } from "../utils/clearField.js";

export function pickRandomGame() {
  setState("isSolutionShowed", false);
  setState("isGameStarted", false);
  setState("isGameOver", false);
  let levels = ["easy", "medium", "hard"];
  let level = levels[Math.round(Math.random() * 2)];
  let puzzle;

  switch (level) {
    case "easy":
      setState("difficulty", 5);
      puzzle = puzzlesEasy;
      gameBoard.classList.remove("hard");
      topLine.classList.remove("hard", "medium");
      topLine.classList.add("easy");
      leftLine.classList.remove("hard", "medium");
      leftLine.classList.add("easy");
      field.classList.remove("hard", "medium");
      field.classList.add("easy");
      resetUserInput(5);
      break;
    case "medium":
      setState("difficulty", 10);
      puzzle = puzzlesMedium;
      gameBoard.classList.remove("hard");
      topLine.classList.remove("hard", "easy");
      topLine.classList.add("medium");
      leftLine.classList.remove("hard", "easy");
      leftLine.classList.add("medium");
      field.classList.remove("hard", "easy");
      field.classList.add("medium");
      resetUserInput(10);
      break;
    case "hard":
      setState("difficulty", 15);
      puzzle = puzzlesHard;
      gameBoard.classList.add("hard");
      topLine.classList.remove("medium", "easy");
      topLine.classList.add("hard");
      leftLine.classList.remove("easy", "medium");
      leftLine.classList.add("hard");
      field.classList.remove("easy", "medium");
      field.classList.add("hard");
      resetUserInput(15);
      break;
  }

  setState("picture", puzzle[Math.round(Math.random() * 4)]);

  levelsBlock.childNodes.forEach((item) => {
    if (!item.classList.contains(level)) {
      item.classList.remove("active");
    } else {
      item.classList.add("active");
    }
  });

  levelPuzzlesBlock.childNodes.forEach((item) => {
    item.classList.contains(level)
      ? item.classList.remove("hidden")
      : item.classList.add("hidden");
    item.classList.remove("active");
  });

  let activePuzzleButton;

  switch (state.picture) {
    case puzzleAlien:
      activePuzzleButton = levelPuzzlesBlock.querySelector(".Alien");
      break;
    case puzzleRocket:
      activePuzzleButton = levelPuzzlesBlock.querySelector(".Rocket");
      break;
    case puzzleDinosaur:
      activePuzzleButton = levelPuzzlesBlock.querySelector(".Dinosaur");
      break;
    case puzzleFlower:
      activePuzzleButton = levelPuzzlesBlock.querySelector(".Flower");
      break;
    case puzzleTree:
      activePuzzleButton = levelPuzzlesBlock.querySelector(".Tree");
      break;
    case puzzleSpaceFood:
      activePuzzleButton = levelPuzzlesBlock.querySelector(".SpaceFood");
      break;
    case puzzleMartian:
      activePuzzleButton = levelPuzzlesBlock.querySelector(".Martian");
      break;
    case puzzleAstronaut:
      activePuzzleButton = levelPuzzlesBlock.querySelector(".Astronaut");
      break;
    case puzzleAndroid:
      activePuzzleButton = levelPuzzlesBlock.querySelector(".Android");
      break;
    case puzzleSpider:
      activePuzzleButton = levelPuzzlesBlock.querySelector(".Spider");
      break;
    case puzzleUFO:
      activePuzzleButton = levelPuzzlesBlock.querySelector(".UFO");
      break;
    case puzzleCandy:
      activePuzzleButton = levelPuzzlesBlock.querySelector(".Candy");
      break;
    case puzzleCity:
      activePuzzleButton = levelPuzzlesBlock.querySelector(".City");
      break;
    case puzzleBigRocket:
      activePuzzleButton = levelPuzzlesBlock.querySelector(".BigRocket");
      break;
    case puzzleRobot:
      activePuzzleButton = levelPuzzlesBlock.querySelector(".Robot");
      break;
  }

  activePuzzleButton.classList.add("active");
  clearField();
  leftLine.innerText = "";
  topLine.innerText = "";
  field.innerHTML = "";
  createGameArea(level, state.picture);
}
