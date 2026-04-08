import { messageBlock } from "../components/pageLayout.js";
import { setState, state } from "../script.js";

export function showTopList() {
  if (state.isListShowed) {
    messageBlock.classList.add("hidden");
    setState("isListShowed", false);
  } else if (
    messageBlock.classList.contains("hidden") ||
    messageBlock.innerText !== ""
  ) {
    messageBlock.classList.remove("hidden");
    messageBlock.innerText = localStorage.topList;
    if (state.theme === "Dark") {
      messageBlock.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    } else {
      messageBlock.style.backgroundColor = "rgba(188, 116, 169, 0.7)";
    }
    setState("isListShowed", true);
  }
}
