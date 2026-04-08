import { changePicture } from "../../handlers/changePicture.js";
import { changeLevel } from "../../utils/changeLevel.js";
import { createElementInHTML } from "../createElementInHTML.js";

export const easyButton = createElementInHTML(
  "div",
  "Easy",
  "button",
  "easy-button",
  "easy",
  "active",
);
export const mediumButton = createElementInHTML(
  "div",
  "Medium",
  "button",
  "medium-button",
  "medium",
);
export const hardButton = createElementInHTML(
  "div",
  "Hard",
  "button",
  "hard-button",
  "hard",
);

easyButton.addEventListener("click", changeLevel);
mediumButton.addEventListener("click", changeLevel);
hardButton.addEventListener("click", changeLevel);

export const alienButton = createElementInHTML(
  "div",
  "Alien",
  "button",
  "alien-button",
  "Alien",
  "easy",
  "active",
);
const treeButton = createElementInHTML(
  "div",
  "Tree",
  "button",
  "tree-button",
  "Tree",
  "easy",
);
const rocketButton = createElementInHTML(
  "div",
  "Rocket",
  "button",
  "rocket-button",
  "Rocket",
  "easy",
);
const dinosaurButton = createElementInHTML(
  "div",
  "Dinosaur",
  "button",
  "dinosaur-button",
  "Dinosaur",
  "easy",
);
const flowerButton = createElementInHTML(
  "div",
  "Flower",
  "button",
  "flower-button",
  "Flower",
  "easy",
);
export const spiderButton = createElementInHTML(
  "div",
  "Spider",
  "button",
  "spider-button",
  "Spider",
  "medium",
  "hidden",
);
const androidButton = createElementInHTML(
  "div",
  "Android",
  "button",
  "android-button",
  "Android",
  "medium",
  "hidden",
);
const martianButton = createElementInHTML(
  "div",
  "Martian",
  "button",
  "martian-button",
  "Martian",
  "medium",
  "hidden",
);
const spaceFoodButton = createElementInHTML(
  "div",
  "Spacefood",
  "button",
  "space-food-button",
  "SpaceFood",
  "medium",
  "hidden",
);
const astronautButton = createElementInHTML(
  "div",
  "Astronaut",
  "button",
  "astronaut-button",
  "Astronaut",
  "medium",
  "hidden",
);
export const UFOButton = createElementInHTML(
  "div",
  "UFO",
  "button",
  "ufo-button",
  "UFO",
  "hard",
  "hidden",
);
const candyButton = createElementInHTML(
  "div",
  "Candy",
  "button",
  "candy-button",
  "Candy",
  "hard",
  "hidden",
);
const cityButton = createElementInHTML(
  "div",
  "City",
  "button",
  "city-button",
  "City",
  "hard",
  "hidden",
);
const bigRocketButton = createElementInHTML(
  "div",
  "Big rocket",
  "button",
  "big-rocket-button",
  "BigRocket",
  "hard",
  "hidden",
);
const robotButton = createElementInHTML(
  "div",
  "Robot",
  "button",
  "robot-button",
  "Robot",
  "hard",
  "hidden",
);

alienButton.addEventListener("click", changePicture);
treeButton.addEventListener("click", changePicture);
rocketButton.addEventListener("click", changePicture);
dinosaurButton.addEventListener("click", changePicture);
flowerButton.addEventListener("click", changePicture);
spiderButton.addEventListener("click", changePicture);
androidButton.addEventListener("click", changePicture);
martianButton.addEventListener("click", changePicture);
spaceFoodButton.addEventListener("click", changePicture);
astronautButton.addEventListener("click", changePicture);
UFOButton.addEventListener("click", changePicture);
candyButton.addEventListener("click", changePicture);
cityButton.addEventListener("click", changePicture);
bigRocketButton.addEventListener("click", changePicture);
robotButton.addEventListener("click", changePicture);

export const levelPuzzlesBlock = createElementInHTML(
  "div",
  "",
  "level-puzzles-block",
);
levelPuzzlesBlock.append(
  UFOButton,
  robotButton,
  cityButton,
  bigRocketButton,
  candyButton,
  spiderButton,
  alienButton,
  dinosaurButton,
  rocketButton,
  flowerButton,
  treeButton,
  androidButton,
  martianButton,
  spaceFoodButton,
  astronautButton,
);

export const levelsBlock = createElementInHTML("div", "", "levels-block");
levelsBlock.append(easyButton, mediumButton, hardButton);
