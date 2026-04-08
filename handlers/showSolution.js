import { continueLastGameButton } from "../components/buttons/continueGameButton.js";
import { saveGameButton } from "../components/buttons/saveGameButton.js";
import { field } from "../components/gameAreaField.js";
import { setState, state } from "../script.js";
import { clearField } from "../utils/clearField.js";
import { cellClick } from "./cellClick.js";
import { continueGame } from "./continueGame.js";
import { saveGame } from "./saveGame.js";
import { startGame } from "./startGame.js";

export function showSolution() {
  setState("isSolutionShowed", true);
  setState("isGameStarted", false);
  clearField();

  field.childNodes.forEach((cell) => {
    let classes = cell.classList[1].split("-");
    for (let i = 0; i < state.picture.length; i++) {
      for (let j = 0; j < state.picture[i].length; j++) {
        if (
          i === +classes[1] &&
          j === +classes[2] &&
          state.picture[i][j] === 1
        ) {
          if (state.theme === "Light") {
            cell.classList.add("white");
          } else {
            cell.classList.add("black");
          }
        }
      }
    }
  });

  field.removeEventListener("click", startGame);
  field.removeEventListener("contextmenu", startGame);

  field.childNodes.forEach((cell) => {
    cell.removeEventListener("click", cellClick);
    cell.removeEventListener("contextmenu", cellClick);
  });

  saveGameButton.classList.add("disabled");
  saveGameButton.removeEventListener("click", saveGame);
  continueLastGameButton.classList.add("disabled");
  continueLastGameButton.removeEventListener("click", continueGame);
}
