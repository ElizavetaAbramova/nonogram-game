import { pickRandomGame } from "../../handlers/pickRandomGame.js";
import { createElementInHTML } from "../createElementInHTML.js";

export const randomGameButton = createElementInHTML(
  "div",
  "Random game",
  "button",
  "random-game-button",
);

randomGameButton.addEventListener("click", pickRandomGame);
