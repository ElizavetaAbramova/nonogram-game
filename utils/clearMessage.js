import { messageBlock } from "../components/pageLayout.js";

export function clearMessage() {
  messageBlock.innerText = "";
  messageBlock.style.backgroundColor = "";
  messageBlock.classList.add("hidden");
}
