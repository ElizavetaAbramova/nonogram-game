import { levelPuzzlesBlock } from "../components/buttons/levelButtons.js";
import { saveGameButton } from "../components/buttons/saveGameButton.js";
import { messageBlock } from "../components/pageLayout.js";
import { cellClick } from "../handlers/cellClick.js";
import { saveGame } from "../handlers/saveGame.js";
import { startGame } from "../handlers/startGame.js";
import { setState, state } from "../script.js";
import { counter, field } from "../components/gameAreaField.js";

function win() {
  setState("isGameStarted", false);
  setState("isGameOver", true);
  setState("isListShowed", false);

  field.removeEventListener("click", startGame);
  field.removeEventListener("contextmenu", startGame);
  saveGameButton.classList.add("disabled");
  saveGameButton.removeEventListener("click", saveGame);
  field.childNodes.forEach((item) => {
    item.removeEventListener("click", cellClick);
    item.removeEventListener("contextmenu", cellClick);
  });
  messageBlock.classList.remove("hidden");
  messageBlock.innerText = `Great! You have solved the nonogram in ${Math.floor(state.millisecondsGap / 1000)} seconds!`;

  if (state.theme === "Dark") {
    messageBlock.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
  } else {
    messageBlock.style.backgroundColor = "rgba(188, 116, 169, 0.7)";
  }

  if (!state.isSolutionShowed) {
    let puzzle = levelPuzzlesBlock.querySelector(".active");
    if (localStorage.topList) {
      setState("list", `${localStorage.topList}\n`);
    }
    setState(
      "list",
      state.list +
        `${state.level} - ${puzzle.classList[2]} - ${counter.innerText}.`,
    );

    let listArray = state.list.split(".");

    if (listArray.length > 6) {
      listArray.splice(0, 1);
      setState("list", listArray.join("."));
    }

    localStorage.setItem("topList", state.list.trimStart());
  }

  let sound = document.createElement("audio");
  sound.src = "assets/sound/win-sound.mp3";
  sound.autoplay = true;
}

export function check(userInputArray) {
  let count = 0;
  let result = false;
  for (let i = 0; i < state.picture.length; i++) {
    for (let j = 0; j < state.picture[i].length; j++) {
      if (state.picture[i][j] === userInputArray[i][j]) {
        result = true;
        count++;
      } else {
        count = 0;
      }
    }
  }
  if (count === state.difficulty ** 2 && result) {
    win();
    return true;
  }
  return false;
}
