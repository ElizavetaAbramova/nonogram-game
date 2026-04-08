import { clearField } from "../../utils/clearField.js";
import { createElementInHTML } from "../createElementInHTML.js";

export const resetGameButton = createElementInHTML(
  "div",
  "Reset game",
  "button",
  "reset-button",
);

resetGameButton.addEventListener("click", clearField);
