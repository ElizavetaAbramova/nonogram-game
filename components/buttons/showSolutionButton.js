import { showSolution } from "../../handlers/showSolution.js";
import { createElementInHTML } from "../createElementInHTML.js";

export const solutionButton = createElementInHTML(
  "div",
  "Solution",
  "button",
  "solution-button",
);

solutionButton.addEventListener("click", showSolution);
