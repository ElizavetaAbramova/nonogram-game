import { gameBoard } from "./gameAreaField.js";
import { switchThemeButton } from "../utils/themeSwitcher.js";
import { continueLastGameButton } from "./buttons/continueGameButton.js";
import { levelPuzzlesBlock, levelsBlock } from "./buttons/levelButtons.js";
import { randomGameButton } from "./buttons/randomGame.js";
import { resetGameButton } from "./buttons/resetButton.js";
import { saveGameButton } from "./buttons/saveGameButton.js";
import { solutionButton } from "./buttons/showSolutionButton.js";
import { topButton } from "./buttons/showTopScoreButton.js";
import { soundButton } from "./buttons/soundController.js";
import { createElementInHTML } from "./createElementInHTML.js";

export const messageBlock = createElementInHTML(
  "div",
  "",
  "message-block",
  "hidden",
);

const buttonsBlock = createElementInHTML("div", "", "buttons-block");
buttonsBlock.append(
  resetGameButton,
  saveGameButton,
  continueLastGameButton,
  soundButton,
);

const additionalButtonsBlock = createElementInHTML("div", "", "add-block");
additionalButtonsBlock.append(
  switchThemeButton,
  solutionButton,
  randomGameButton,
  topButton,
);

const menuBlock = createElementInHTML("div", "", "menu-block");
menuBlock.append(
  buttonsBlock,
  levelsBlock,
  levelPuzzlesBlock,
  additionalButtonsBlock,
  messageBlock,
);

export const mainSection = createElementInHTML("section", "", "main");
mainSection.append(menuBlock, gameBoard);
