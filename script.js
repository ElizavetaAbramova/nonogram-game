import { mainSection } from "./components/pageLayout.js";
import { puzzleAlien } from "./components/puzzleTemplates.js";
import { createGameArea } from "./components/gameAreaField.js";

export let userInput = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

export const changeUserInput = (row, column, value) => {
  userInput[row][column] = value;
};

export const replaceUserInput = (newInput) => {
  userInput = newInput;
};

export const resetUserInput = (difficulty) => {
  userInput = Array(difficulty)
    .fill(0)
    .map((item) => (item = Array(difficulty).fill(0)));
};

export const clearUserInput = () => {
  userInput.forEach((arr) => {
    arr.fill(0);
  });
};

export const state = {
  difficulty: 5,
  level: "easy",
  isGameStarted: false,
  isGameOver: false,
  isGameContinue: false,
  isSolutionShowed: false,
  isListShowed: false,
  picture: puzzleAlien,
  theme: "Dark",
  savedGap: 0,
  millisecondsGap: 0,
  list: "",
  savedList: localStorage.topList,
  isSoundOn: true,
};

export const setState = (key, value) => {
  state[key] = value;
};

export const body = document.querySelector(".body");
body.append(mainSection);

createGameArea(state.level, state.picture);
