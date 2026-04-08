import { saveGame } from "../../handlers/saveGame.js";
import { createElementInHTML } from "../createElementInHTML.js";

export const saveGameButton = createElementInHTML(
  "div",
  "Save game",
  "button",
  "save-button",
);

saveGameButton.addEventListener("click", saveGame);
