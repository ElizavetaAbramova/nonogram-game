import { setState, state } from "../../script.js";
import { createElementInHTML } from "../createElementInHTML.js";

export const soundButton = createElementInHTML(
  "div",
  "",
  "button",
  "sound-button",
);
export const soundIcon = createElementInHTML("img", "", "icon");
soundIcon.src = "assets/icons/volume.png";

function soundHandler() {
  if (state.isSoundOn) {
    setState("isSoundOn", false);
    soundIcon.src = "assets/icons/no-sound.png";
  } else {
    setState("isSoundOn", true);
    soundIcon.src = "assets/icons/volume.png";
  }
}

soundButton.addEventListener("click", soundHandler);
soundButton.append(soundIcon);
