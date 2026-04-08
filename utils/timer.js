import { setState, state } from "../script.js";
import { counter } from "../components/gameAreaField.js";

export function timer(date) {
  let gap = new Date();
  setState("millisecondsGap", gap.getTime() - date.getTime());

  if (localStorage.gap && state.isGameContinue) {
    setState(
      "millisecondsGap",
      Number(state.millisecondsGap) + Number(state.savedGap),
    );
  }

  let minutes = Math.floor(state.millisecondsGap / 60000);
  let seconds = Math.floor((state.millisecondsGap % 60000) / 1000);
  counter.innerText =
    `${minutes}`.padStart(2, 0) + ":" + `${seconds % 60}`.padStart(2, 0);
}
