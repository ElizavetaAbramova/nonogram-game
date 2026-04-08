import { soundButton } from "../components/buttons/soundController.js";
import { createElementInHTML } from "../components/createElementInHTML.js";
import { gameBoard, leftLine, topLine } from "../components/gameAreaField.js";
import { messageBlock } from "../components/pageLayout.js";
import { body, state } from "../script.js";

export const switchThemeButton = createElementInHTML(
  "div",
  `Dark theme`,
  "button",
  "switch-theme-button",
);

function switchTheme() {
  body.classList.toggle("dark");
  let buttons = document.querySelectorAll(".button");
  buttons.forEach((item) => item.classList.toggle("dark"));
  let cells = document.querySelectorAll(".cell");
  cells.forEach((item) => {
    item.classList.toggle("dark");
    if (item.classList.contains("white")) {
      item.classList.remove("white");
      item.classList.add("black");
    } else if (item.classList.contains("black")) {
      item.classList.remove("black");
      item.classList.add("white");
    }
  });
  gameBoard.classList.toggle("dark");
  topLine.classList.toggle("dark");
  leftLine.classList.toggle("dark");
  if (state.theme === "Dark") {
    state.theme = "Light";
    if (state.isGameOver)
      messageBlock.style.backgroundColor = "rgba(188, 116, 169, 0.7)";
    soundButton.style.backgroundColor = "rgb(188, 116, 169)";
  } else {
    state.theme = "Dark";
    if (state.isGameOver)
      messageBlock.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    soundButton.style.backgroundColor = "";
  }
  switchThemeButton.innerText = `${state.theme} theme`;
}

switchThemeButton.addEventListener("click", switchTheme);
