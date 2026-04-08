import { changeUserInput, state, userInput } from "../script.js";
import { check } from "../utils/checkUserInput.js";

export function cellClick(event) {
  let cell = event.target;
  const [row, column] = cell.classList[1]
    .split("-")
    .slice(1)
    .map((item) => Number(item));
  if (event.button === 0) {
    if (state.theme === "Dark") {
      cell.classList.toggle("black");
    } else {
      cell.classList.toggle("white");
    }
    cell.innerText = "";
    if (userInput[row][column] === 1) {
      changeUserInput(row, column, 0);
    } else {
      changeUserInput(row, column, 1);
    }
    if (state.isSoundOn) {
      let sound = document.createElement("audio");
      sound.src = "assets/sound/left-click-sound.mp3";
      sound.autoplay = true;
    }
    check(userInput);
  }
  if (event.button === 2) {
    if (cell.innerText === "X") {
      cell.innerText = "";
    } else {
      cell.innerText = "X";
      changeUserInput(row, column, 0);
    }
    cell.classList.remove("black");
    cell.classList.remove("white");
    if (state.isSoundOn) {
      let sound = document.createElement("audio");
      sound.src = "assets/sound/right-click-sound.mp3";
      sound.autoplay = true;
    }
  }
}
