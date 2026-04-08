import { state } from "../script.js";
import { counter } from "../components/gameAreaField.js";
import { timer } from "../utils/timer.js";

export function startGame(event) {
  if (!state.isGameStarted) {
    state.isGameStarted = true;
    let now = new Date();
    if (counter.innerText === "00:00" || counter.innerText === "") {
      counter.innerText = "00:00";
    }
    let intervalID = setInterval(() => {
      if (state.isGameStarted) {
        timer(now);
      } else {
        clearInterval(intervalID);
      }
    }, 1000);
  }
}
