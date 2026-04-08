import { continueGame } from "../../handlers/continueGame.js";
import { createElementInHTML } from "../createElementInHTML.js";

export const continueLastGameButton = createElementInHTML(
  "div",
  "Continue last game",
  "button",
  "continue-last-game-button",
);

continueLastGameButton.addEventListener("click", continueGame);
