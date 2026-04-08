import { showTopList } from "../../handlers/showTopList.js";
import { createElementInHTML } from "../createElementInHTML.js";

export const topButton = createElementInHTML(
  "div",
  "Top score",
  "button",
  "top-button",
);

topButton.addEventListener("click", showTopList);
