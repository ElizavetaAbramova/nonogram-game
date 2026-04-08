import { clearUserInput, setState } from "../script.js";
import { clearGameArea, field } from "../components/gameAreaField.js";
import { saveGameButton } from "../components/buttons/saveGameButton.js";
import { saveGame } from "../handlers/saveGame.js";
import { continueLastGameButton } from "../components/buttons/continueGameButton.js";
import { continueGame } from "../handlers/continueGame.js";
import { startGame } from "../handlers/startGame.js";
import { cellClick } from "../handlers/cellClick.js";
import { clearMessage } from "./clearMessage.js";

export function clearField() {
  setState("isGameStarted", false);
  setState("isGameOver", false);

  clearGameArea();
  clearUserInput();

  saveGameButton.classList.remove("disabled");
  saveGameButton.addEventListener("click", saveGame);

  continueLastGameButton.classList.remove("disabled");
  continueLastGameButton.addEventListener("click", continueGame);

  field.addEventListener("click", startGame);
  field.addEventListener("contextmenu", startGame);

  field.childNodes.forEach((cell) => {
    cell.addEventListener("click", cellClick);
    cell.addEventListener("contextmenu", cellClick);
  });
  setState("savedGap", 0);
  clearMessage();
}
