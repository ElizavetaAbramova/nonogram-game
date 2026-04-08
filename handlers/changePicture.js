import { levelPuzzlesBlock } from "../components/buttons/levelButtons.js";
import {
  counter,
  createGameArea,
  field,
  leftLine,
  topLine,
} from "../components/gameAreaField.js";
import {
  puzzleAlien,
  puzzleAndroid,
  puzzleAstronaut,
  puzzleBigRocket,
  puzzleCandy,
  puzzleCity,
  puzzleDinosaur,
  puzzleFlower,
  puzzleMartian,
  puzzleRobot,
  puzzleRocket,
  puzzleSpaceFood,
  puzzleSpider,
  puzzleTree,
  puzzleUFO,
} from "../components/puzzleTemplates.js";
import { setState, state } from "../script.js";
import { clearField } from "../utils/clearField.js";
import { clearMessage } from "../utils/clearMessage.js";
import { cellClick } from "./cellClick.js";
import { startGame } from "./startGame.js";

export function changePicture(event) {
  let button = event.target;
  if (!button.classList.contains("active")) {
    levelPuzzlesBlock.childNodes.forEach((item) =>
      item.classList.remove("active"),
    );
    button.classList.add("active");
  }
  switch (button.classList[2]) {
    case "Alien":
      setState("picture", puzzleAlien);
      break;
    case "Rocket":
      setState("picture", puzzleRocket);
      break;
    case "Dinosaur":
      setState("picture", puzzleDinosaur);
      break;
    case "Flower":
      setState("picture", puzzleFlower);
      break;
    case "Tree":
      setState("picture", puzzleTree);
      break;
    case "SpaceFood":
      setState("picture", puzzleSpaceFood);
      break;
    case "Martian":
      setState("picture", puzzleMartian);
      break;
    case "Astronaut":
      setState("picture", puzzleAstronaut);
      break;
    case "Android":
      setState("picture", puzzleAndroid);
      break;
    case "Spider":
      setState("picture", puzzleSpider);
      break;
    case "UFO":
      setState("picture", puzzleUFO);
      break;
    case "Candy":
      setState("picture", puzzleCandy);
      break;
    case "City":
      setState("picture", puzzleCity);
      break;
    case "BigRocket":
      setState("picture", puzzleBigRocket);
      break;
    case "Robot":
      setState("picture", puzzleRobot);
      break;
  }

  topLine.innerHTML = "";
  leftLine.innerHTML = "";
  field.innerHTML = "";
  counter.innerText = "";
  createGameArea(state.level, state.picture);
  clearField();
  clearMessage();

  field.addEventListener("click", startGame);
  field.childNodes.forEach((item) => item.addEventListener("click", cellClick));
  setState("isGameStarted", false);
  setState("isGameOver", false);
  setState("isGameContinue", false);
  setState("isSolutionShowed", false);
  setState("millisecondsGap", 0);
}
