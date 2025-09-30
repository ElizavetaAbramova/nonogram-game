const puzzleAlien = [[0, 1, 1, 1, 0], [0, 0, 1, 0, 0], [1, 1, 1, 1, 1], [0, 1, 1, 1, 0], [1, 1, 0, 1, 1]];
const puzzleTree = [[0, 0, 1, 0, 0], [0, 1, 1, 1, 0], [0, 1, 1, 1, 0], [1, 1, 1, 1, 1], [0, 0, 1, 0, 0]];
const puzzleRocket = [[0,0,1,0,0], [0,1,0,1,0], [0,1,1,1,0], [1,1,1,1,1], [0,1,0,1,0]];
const puzzleDinosaur = [[0,0,0,1,1],[0,0,1,1,0],[0,1,1,1,0],[1,1,1,1,0],[1,0,0,1,0]];
const puzzleFlower = [[0,0,1,0,0],[0,1,1,1,0],[1,1,0,1,1],[0,1,1,1,0],[0,0,1,0,0]];
const puzzleAndroid = [[0,0,0,1,1,1,0,0,0,0],[0,0,1,1,1,1,1,0,0,0],[0,0,1,1,0,0,1,0,0,1],[0,0,1,1,1,1,1,0,0,1],[0,0,0,1,1,1,0,0,0,1],[0,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,1,1,0,0],[1,0,1,1,0,1,1,0,0,0],[1,0,1,1,1,1,1,0,0,0],[1,0,0,1,1,1,0,0,0,0]];
const puzzleMartian = [[0,1,0,0,0,0,0,0,0,0],[1,1,0,0,1,1,1,0,0,0],[0,1,0,1,1,1,1,1,0,0],[0,0,0,1,0,1,0,1,0,0],[1,0,0,0,1,1,1,0,0,1],[1,0,0,0,0,1,0,0,1,1],[1,0,0,1,1,1,1,0,0,1],[1,1,1,1,1,1,1,1,0,0],[0,0,0,0,1,1,1,1,0,0],[0,0,0,0,1,1,1,1,0,0]];
const puzzleSpaceFood = [[0,0,0,1,1,1,1,1,1,0],[0,0,1,1,0,0,0,1,1,1],[0,0,1,0,0,0,0,0,1,1],[0,0,1,0,0,0,0,1,1,1],[0,1,1,1,0,0,1,1,1,0],[0,1,1,1,0,0,1,1,0,0],[0,1,1,1,0,0,1,1,1,0],[0,1,1,1,0,0,0,1,1,1],[0,1,1,1,0,0,0,0,1,1],[1,1,1,1,1,0,0,0,0,0]];
const puzzleSpider = [[0,0,0,1,1,0,0,1,1,0],[1,1,1,0,1,0,1,1,1,1],[0,0,1,0,1,0,1,1,1,1],[0,0,0,1,1,0,1,1,1,0],[1,1,1,1,1,1,1,0,0,0],[0,0,0,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,0,0,1],[1,1,1,1,0,1,0,1,0,1],[0,0,1,0,0,1,0,1,0,0],[0,0,1,0,0,1,0,1,0,0]];
const puzzleAstronaut = [[0,0,0,1,1,1,1,0,0,0],[0,0,1,1,1,1,1,1,0,0],[0,1,1,0,0,0,0,1,1,0],[0,1,0,0,0,0,0,0,1,0],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,1,0,0],[0,0,1,1,0,0,1,1,0,0],[0,1,1,1,0,0,1,1,1,0]];
const puzzleUFO = [[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],[0,0,1,1,1,0,0,0,0,0,0,1,1,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,0,1,1,0,1,1,0,1,1,0,1,1,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,0,0,1,1,1,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,1,1,0,0,0,0,1],[1,0,0,0,1,1,1,1,1,1,0,0,0,0,1],[1,0,0,0,0,1,1,1,1,0,1,0,0,0,1],[1,0,0,0,1,1,1,1,1,0,1,0,0,0,1],[1,1,1,0,1,1,1,1,1,1,1,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];
const puzzleCandy = [[0,0,1,1,1,1,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,1,0,0,0,0,0,0,0,0,0],[1,1,0,1,1,1,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],[1,1,1,1,1,0,1,1,0,1,1,0,0,0,0],[0,0,0,1,1,1,1,0,0,1,1,1,0,0,0],[0,0,0,1,1,1,0,0,1,1,1,1,0,0,0],[0,0,0,1,1,0,0,1,1,0,1,1,0,0,0],[0,0,0,0,1,1,1,1,0,0,1,1,0,0,0],[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,1,1,0,1,1],[0,0,0,0,0,0,0,0,0,0,1,1,1,1,0],[0,0,0,0,0,0,0,0,0,0,1,1,1,0,0]];
const puzzleCity = [[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],[0,0,1,0,0,1,1,1,1,0,0,0,0,0,0],[0,0,1,0,0,1,0,0,1,0,1,1,1,0,0],[0,1,1,1,0,1,1,1,1,0,1,0,1,0,0],[0,1,1,1,0,1,0,0,1,1,1,0,1,1,0],[1,1,1,1,1,1,1,1,1,0,1,1,1,1,1],[1,0,1,1,1,1,0,0,1,0,1,1,1,0,1],[1,1,1,0,1,1,1,1,1,0,1,0,1,0,1],[1,0,1,1,1,1,0,0,1,1,1,0,1,1,1],[1,1,1,1,0,1,1,1,1,0,1,1,1,0,1],[1,1,1,1,0,1,1,0,1,1,1,0,1,1,1],[1,0,1,1,0,1,1,1,0,1,1,1,1,1,1],[1,1,1,1,0,1,1,1,1,1,1,1,1,1,1]];
const puzzleBigRocket = [[0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],[0,1,1,1,0,0,1,1,1,0,0,0,0,1,1],[0,1,1,1,0,0,1,0,1,0,0,0,0,0,0],[0,1,1,1,0,0,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,0,0,0,1,1,0],[0,0,0,0,0,0,1,0,1,0,0,1,1,1,1],[1,0,0,0,0,0,1,1,1,0,0,0,0,0,0],[1,1,0,0,0,0,1,0,1,0,0,0,0,0,0],[0,0,0,0,0,1,1,0,1,1,0,0,0,0,0],[0,0,1,1,0,0,1,1,1,0,0,0,0,0,0],[0,1,1,1,1,0,1,1,1,0,0,1,1,1,0],[1,1,1,1,1,1,1,1,1,0,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];
const puzzleRobot = [[0,0,0,0,0,0,1,1,1,1,0,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,1,1,0,0,0,0,1,1,0,0,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,0,1,1],[0,1,1,0,1,1,0,1,1,0,1,1,0,1,1],[0,0,1,0,1,0,1,1,1,1,0,1,0,1,0],[0,1,1,0,0,1,1,1,1,1,1,0,0,1,1],[0,1,1,0,0,0,1,1,1,1,0,0,0,1,1],[1,1,1,1,0,0,0,1,1,0,0,0,1,1,1],[0,1,1,0,0,1,1,1,1,1,1,0,0,1,1],[0,0,0,0,1,1,0,1,1,0,1,1,0,0,0],[1,0,0,0,1,1,0,0,0,0,1,1,0,0,0],[1,1,0,1,1,1,0,0,0,1,1,1,1,0,0],[1,1,0,1,1,1,0,0,1,1,1,1,1,0,1]];
const puzzlesEasy = [puzzleAlien, puzzleTree, puzzleRocket, puzzleDinosaur, puzzleFlower];
const puzzlesMedium = [puzzleSpider, puzzleMartian, puzzleAndroid, puzzleSpaceFood, puzzleAstronaut];
const puzzlesHard = [puzzleRobot, puzzleBigRocket, puzzleCity, puzzleCandy, puzzleUFO];

let userInput = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];
let difficulty = 5;
let level = 'easy';
let isGameStarted = false;
let isGameOver = false;
let isGameContinue = false;
let isSolutionShowed = false;
let isListShowed = false;
let picture = puzzleAlien;
let theme = 'Dark';
let savedGap = 0;
let milisecondsGap = 0;
let list = '';
let savedList = localStorage.topList;
isSoundOn = true;

const body = document.querySelector('.body');

function createElementInHTML(tag, text) {
  let element = document.createElement(tag);
  let classes = [...arguments].slice(2);
  classes.map((item) => element.classList.add(item));
  element.innerText = text;
  return element;
}

const mainSection = createElementInHTML('section', '', 'main');
const menuBlock = createElementInHTML('div', '', 'menu-block');
const buttonsBlock = createElementInHTML('div', '', 'buttons-block');
const levelsBlock = createElementInHTML('div', '', 'levels-block');
const levelPuzzlesBlock = createElementInHTML('div', '', 'level-puzzles-block');
const additionalButtonsBlock = createElementInHTML('div', '', 'add-block');
const messageBlock = createElementInHTML('div', '', 'message-block', 'hidden');
const resetGameButton = createElementInHTML('div', 'Reset game', 'button', 'reset-button');
const saveGameButton = createElementInHTML('div', 'Save game', 'button', 'save-button');
const continueLastGameButton = createElementInHTML('div', 'Continue last game', 'button', 'continue-last-game-button');
const counter = createElementInHTML('div', '', 'counter');
const gameBoard = createElementInHTML('div', '', 'game-board');
const topLine = createElementInHTML('div', '', 'top-line', 'easy');
const leftLine = createElementInHTML('div', '', 'left-line', 'easy');
const field = createElementInHTML('div', '', 'field', 'easy');
const easyButton = createElementInHTML('div', 'Easy', 'button', 'easy-button', 'easy', 'active');
const mediumButton = createElementInHTML('div', 'Medium', 'button', 'medium-button', 'medium');
const hardButton = createElementInHTML('div', 'Hard', 'button', 'hard-button', 'hard');
const alienButton = createElementInHTML('div', 'Alien', 'button', 'alien-button', 'Alien', 'easy', 'active');
const treeButton = createElementInHTML('div', 'Tree', 'button', 'tree-button', 'Tree', 'easy');
const rocketButton = createElementInHTML('div', 'Rocket', 'button', 'rocket-button', 'Rocket', 'easy');
const dinosaurButton = createElementInHTML('div', 'Dinosaur', 'button', 'dinosaur-button', 'Dinosaur', 'easy');
const flowerButton = createElementInHTML('div', 'Flower', 'button', 'flower-button', 'Flower', 'easy');
const spiderButton = createElementInHTML('div', 'Spider', 'button', 'spider-button', 'Spider', 'medium', 'hidden');
const androidButton = createElementInHTML('div', 'Android', 'button', 'android-button', 'Android', 'medium', 'hidden');
const martianButton = createElementInHTML('div', 'Martian', 'button', 'martian-button', 'Martian', 'medium', 'hidden');
const spaceFoodButton = createElementInHTML('div', 'Spacefood', 'button', 'space-food-button', 'SpaceFood', 'medium', 'hidden');
const astronautButton = createElementInHTML('div', 'Astronaut', 'button', 'astronaut-button', 'Astronaut', 'medium', 'hidden');
const UFOButton = createElementInHTML('div', 'UFO', 'button', 'ufo-button', 'UFO', 'hard', 'hidden');
const candyButton = createElementInHTML('div', 'Candy', 'button', 'candy-button', 'Candy', 'hard', 'hidden');
const cityButton = createElementInHTML('div', 'City', 'button', 'city-button', 'City', 'hard', 'hidden');
const bigRocketButton = createElementInHTML('div', 'Big rocket', 'button', 'big-rocket-button', 'BigRocket', 'hard', 'hidden');
const robotButton = createElementInHTML('div', 'Robot', 'button', 'robot-button', 'Robot', 'hard', 'hidden');
const switchThemeButton = createElementInHTML('div', `${theme} theme`, 'button', 'switch-theme-button');
const solutionButton = createElementInHTML('div', 'Solution', 'button', 'solution-button');
const randomGameButton = createElementInHTML('div', 'Random game', 'button', 'random-game-button');
const topButton = createElementInHTML('div', 'Top score', 'button', 'top-button');
const soundButton = createElementInHTML('div', '', 'button', 'sound-button');
const soundIcon = createElementInHTML('img', '', 'icon');

resetGameButton.addEventListener('click', clearField);
saveGameButton.addEventListener('click', saveGame);
continueLastGameButton.addEventListener('click', continueGame);
field.addEventListener('click', startGame);
field.addEventListener('contextmenu', event => event.preventDefault());
field.addEventListener('contextmenu', startGame);
easyButton.addEventListener('click', changeLevel);
mediumButton.addEventListener('click', changeLevel);
hardButton.addEventListener('click', changeLevel);
switchThemeButton.addEventListener('click', switchTheme);
alienButton.addEventListener('click', changePicture);
treeButton.addEventListener('click', changePicture);
rocketButton.addEventListener('click', changePicture);
dinosaurButton.addEventListener('click', changePicture);
flowerButton.addEventListener('click', changePicture);
spiderButton.addEventListener('click', changePicture);
androidButton.addEventListener('click', changePicture);
martianButton.addEventListener('click', changePicture);
spaceFoodButton.addEventListener('click', changePicture);
astronautButton.addEventListener('click', changePicture);
UFOButton.addEventListener('click', changePicture);
candyButton.addEventListener('click', changePicture);
cityButton.addEventListener('click', changePicture);
bigRocketButton.addEventListener('click', changePicture);
robotButton.addEventListener('click', changePicture);
solutionButton.addEventListener('click', showSolution);
randomGameButton.addEventListener('click', randomGame);
topButton.addEventListener('click', showTopList);
soundButton.addEventListener('click', soundsHandler);

soundIcon.src = 'assets/icons/volume.png';
soundButton.append(soundIcon);
buttonsBlock.append(resetGameButton, saveGameButton, continueLastGameButton, soundButton);
levelsBlock.append(easyButton, mediumButton, hardButton);
levelPuzzlesBlock.append(UFOButton, robotButton, cityButton, bigRocketButton, candyButton, spiderButton, alienButton, dinosaurButton, rocketButton, flowerButton, treeButton, androidButton, martianButton, spaceFoodButton, astronautButton);
additionalButtonsBlock.append(switchThemeButton, solutionButton, randomGameButton, topButton);
menuBlock.append(buttonsBlock, levelsBlock, levelPuzzlesBlock, additionalButtonsBlock, messageBlock);
gameBoard.append(counter, topLine, leftLine, field);
mainSection.append(menuBlock, gameBoard);
body.append(mainSection);

function soundsHandler() {
  if (isSoundOn) {
    isSoundOn = false;
    soundIcon.src = 'assets/icons/no-sound.png';
  } else {
    isSoundOn = true;
    soundIcon.src = 'assets/icons/volume.png';
  }
}

function showTopList() {
  if (isListShowed) {
    messageBlock.classList.add('hidden');
    isListShowed = false;
  } else if (messageBlock.classList.contains('hidden') || messageBlock.innerText !== '') {
    messageBlock.classList.remove('hidden');
    messageBlock.innerText = localStorage.topList;
    if (theme === 'Dark') {
      messageBlock.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    } else {
      messageBlock.style.backgroundColor = 'rgba(188, 116, 169, 0.7)';
    }
    isListShowed = true;
  }
}

function randomGame() {
  isSolutionShowed = false;
  isGameStarted = false;
  isGameOver = false;
  let levels = ['easy', 'medium', 'hard'];
  level = levels[Math.round(Math.random() * 2)];
  let puzzle;

  switch (level) {
    case 'easy':
      difficulty = 5;
      puzzle = puzzlesEasy;
      gameBoard.classList.remove('hard');
      topLine.classList.remove('hard', 'medium');
      topLine.classList.add('easy');
      leftLine.classList.remove('hard', 'medium');
      leftLine.classList.add('easy');
      field.classList.remove('hard', 'medium');
      field.classList.add('easy');
      userInput = Array(difficulty).fill(0).map((item) => item = Array(difficulty).fill(0));
      break;
    case 'medium':
      difficulty = 10;
      puzzle = puzzlesMedium;
      gameBoard.classList.remove('hard');
      topLine.classList.remove('hard', 'easy');
      topLine.classList.add('medium');
      leftLine.classList.remove('hard', 'easy');
      leftLine.classList.add('medium');
      field.classList.remove('hard', 'easy');
      field.classList.add('medium');
      userInput = Array(difficulty).fill(0).map((item) => item = Array(difficulty).fill(0));
      break;
    case 'hard':
      difficulty = 15;
      puzzle = puzzlesHard;
      gameBoard.classList.add('hard');
      topLine.classList.remove('medium', 'easy');
      topLine.classList.add('hard');
      leftLine.classList.remove('easy', 'medium');
      leftLine.classList.add('hard');
      field.classList.remove('easy', 'medium');
      field.classList.add('hard');
      userInput = Array(difficulty).fill(0).map((item) => item = Array(difficulty).fill(0));
      break;
  }

  picture = puzzle[Math.round(Math.random() * 4)];

  levelsBlock.childNodes.forEach((item) => {
    if (!item.classList.contains(level)) {
      item.classList.remove('active');
    } else {
      item.classList.add('active')
    }
  });
  levelPuzzlesBlock.childNodes.forEach((item) => {
    item.classList.contains(level) ? item.classList.remove('hidden') : item.classList.add('hidden');
    item.classList.remove('active');
  });
  let activePuzzleButton;

  switch(picture) {
    case puzzleAlien:
      activePuzzleButton = levelPuzzlesBlock.querySelector('.Alien');
      break;
    case puzzleRocket:
      activePuzzleButton = levelPuzzlesBlock.querySelector('.Rocket');
      break;
    case puzzleDinosaur:
      activePuzzleButton = levelPuzzlesBlock.querySelector('.Dinosaur');
      break;
    case puzzleFlower:
      activePuzzleButton = levelPuzzlesBlock.querySelector('.Flower');
      break;
    case puzzleTree:
      activePuzzleButton = levelPuzzlesBlock.querySelector('.Tree');
      break;
    case puzzleSpaceFood:
      activePuzzleButton = levelPuzzlesBlock.querySelector('.SpaceFood');
      break;
    case puzzleMartian:
      activePuzzleButton = levelPuzzlesBlock.querySelector('.Martian');
      break;
    case puzzleAstronaut:
      activePuzzleButton = levelPuzzlesBlock.querySelector('.Astronaut');
      break;
    case puzzleAndroid:
      activePuzzleButton = levelPuzzlesBlock.querySelector('.Android');
      break;
    case puzzleSpider:
      activePuzzleButton = levelPuzzlesBlock.querySelector('.Spider');
      break;
    case puzzleUFO:
      activePuzzleButton = levelPuzzlesBlock.querySelector('.UFO');
      break;
    case puzzleCandy:
      activePuzzleButton = levelPuzzlesBlock.querySelector('.Candy');
      break;
    case puzzleCity:
      activePuzzleButton = levelPuzzlesBlock.querySelector('.City');
      break;
    case puzzleBigRocket:
      activePuzzleButton = levelPuzzlesBlock.querySelector('.BigRocket');
      break;
    case puzzleRobot:
      activePuzzleButton = levelPuzzlesBlock.querySelector('.Robot');
      break;
  }
  activePuzzleButton.classList.add('active');
  clearField();
  leftLine.innerText = '';
  topLine.innerText = '';
  field.innerHTML = '';
  createGameArea(level, picture);
}

function showSolution() {
  isSolutionShowed = true;
  isGameStarted = false;
  clearField();
  field.childNodes.forEach((cell) => {
    let classes = cell.classList[1].split('-');
    for (let i = 0; i < picture.length; i++) {
      for (let j = 0; j < picture[i].length; j++) {
        if (i === +classes[1] && j === +classes[2] && picture[i][j] === 1) {
          if (theme === 'Light') {
            cell.classList.add('white');
          } else {
            cell.classList.add('black');
          }
        }
      }
    }
  });
  field.removeEventListener('click', startGame);
  field.removeEventListener('contextmenu', startGame);
  field.childNodes.forEach((cell) => {
    cell.removeEventListener('click', cellClick);
    cell.removeEventListener('contextmenu', cellClick);
  });
  saveGameButton.classList.add('disabled');
  saveGameButton.removeEventListener('click', saveGame);
  continueLastGameButton.classList.add('disabled');
  continueLastGameButton.removeEventListener('click', continueGame);
}

function saveGame() {
  if (localStorage) {
    savedList = localStorage.topList;
    localStorage.clear();
  }
  let level = levelsBlock.querySelector('.active');
  let puzzle = levelPuzzlesBlock.querySelector('.active');
  localStorage.setItem('puzzle', puzzle.classList[2]);
  localStorage.setItem('level', level.classList[2]);
  localStorage.setItem('time', counter.innerText);
  localStorage.setItem('difficulty', difficulty);
  localStorage.setItem('puzzleArray', JSON.stringify({picture}));
  localStorage.setItem('save', JSON.stringify({userInput}));
  localStorage.setItem('gap', milisecondsGap);
  localStorage.setItem('topList', savedList);

  field.childNodes.forEach((cell) => {
    let cellKey = cell.classList[1];
    let cellValue = '';
    if (cell.classList.contains('black')) {
      cellValue = 'black';
      localStorage.setItem(cellKey, cellValue);
    }
    if (cell.classList.contains('white')) {
      cellValue = 'white';
      localStorage.setItem(cellKey, cellValue);
    }
    if (cell.innerText !== '') {
      cellValue = cell.innerText;
      localStorage.setItem(cellKey, cellValue);
    }
  });
}

function continueGame() {
  if (localStorage) {
    isSolutionShowed = false;
    clearField();
    clearMessage();
    isGameContinue = true;
    isGameOver = false;
    isGameStarted = false;
    let savedInput = JSON.parse(localStorage.save);
    let savedPuzzle = JSON.parse(localStorage.puzzleArray);
    let puzzleButton = levelPuzzlesBlock.querySelector(`.${localStorage.puzzle}`);
    let levelButton = levelsBlock.querySelector(`.${localStorage.level}`);
    picture = savedPuzzle.picture;
    userInput = savedInput.userInput;
    counter.innerText = localStorage.time;
    level = localStorage.level;
    savedGap = localStorage.gap;

    leftLine.innerText = '';
    topLine.innerText = '';
    field.innerHTML = '';
    field.classList.remove(field.classList[1]);
    leftLine.classList.remove(leftLine.classList[1]);
    topLine.classList.remove(topLine.classList[1]);

    createGameArea(localStorage.level, picture);

    field.childNodes.forEach((cell) => {
      if (localStorage.getItem(cell.classList[1])) {
        if (localStorage.getItem(cell.classList[1]) === 'X') {
          cell.innerText = 'X';
        }
        if (localStorage.getItem(cell.classList[1]) !== 'X' && theme === 'Dark') {
          cell.classList.add('black')
        }
        if (localStorage.getItem(cell.classList[1]) !== 'X' && theme === 'Light') {
          cell.classList.add('white')
        }
      };
    });
    levelsBlock.childNodes.forEach((item) => item.classList.remove('active'));
    levelPuzzlesBlock.childNodes.forEach((item) => {
      item.classList.remove('active');
      if (item.classList.contains(`${localStorage.level}`)) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });

    if (gameBoard.classList.contains('hard')) {
      gameBoard.classList.remove('hard');
    };
    if(localStorage.level === 'hard') {
      gameBoard.classList.add('hard');
    }

    field.addEventListener('click', startGame);
    levelButton.classList.add('active');
    puzzleButton.classList.add('active');
    leftLine.classList.add(`${localStorage.level}`);
    topLine.classList.add(`${localStorage.level}`);
    field.classList.add(`${localStorage.level}`);
    if (theme === 'Light') {
      topLine.classList.add('dark');
      leftLine.classList.add('dark');
    }
  }
}

function changeLevel(event) {
  let button = event.target;
  levelsBlock.childNodes.forEach((item) => item.classList.remove('active'));
  levelPuzzlesBlock.childNodes.forEach((item) => {item.classList.remove('active')});
  button.classList.add('active');
  topLine.innerHTML = '';
  leftLine.innerHTML = '';
  field.innerHTML = '';
  switch(button.classList[2]) {
    case 'easy':
      level = 'easy';
      difficulty = 5;
      picture = puzzleAlien;
      levelPuzzlesBlock.childNodes.forEach((item) => {
        if (item.classList.contains('easy')) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
      alienButton.classList.add('active');
      gameBoard.classList.remove('hard');
      field.classList.remove('medium', 'hard');
      field.classList.add('easy');
      topLine.classList.remove('medium', 'hard');
      topLine.classList.add('easy');
      leftLine.classList.remove('medium', 'hard');
      leftLine.classList.add('easy');
      createGameArea(level, picture);
      userInput = Array(difficulty).fill(0).map((item) => item = Array(difficulty).fill(0));
      break;
    case 'medium':
      level = 'medium';
      difficulty = 10;
      picture = puzzleSpider;
      spiderButton.classList.add('active');
      gameBoard.classList.remove('hard');
      field.classList.remove('easy', 'hard');
      field.classList.add('medium');
      topLine.classList.remove('easy', 'hard');
      topLine.classList.add('medium');
      leftLine.classList.remove('easy', 'hard');
      leftLine.classList.add('medium');
      levelPuzzlesBlock.childNodes.forEach((item) => {
        if (item.classList.contains('medium')) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
      createGameArea(level, picture);
      userInput = Array(difficulty).fill(0).map((item) => item = Array(difficulty).fill(0));
      break;
    case 'hard':
      level = 'hard';
      difficulty = 15;
      picture = puzzleUFO;
      UFOButton.classList.add('active');
      gameBoard.classList.add('hard');
      field.classList.remove('easy', 'medium');
      field.classList.add('hard');
      topLine.classList.remove('medium', 'easy');
      topLine.classList.add('hard');
      leftLine.classList.remove('medium', 'easy');
      leftLine.classList.add('hard');
      levelPuzzlesBlock.childNodes.forEach((item) => {
        if (item.classList.contains('hard')) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
      createGameArea(level, picture);
      userInput = Array(difficulty).fill(0).map((item) => item = Array(difficulty).fill(0));
      break;
  }
  counter.innerText = '';
  clearField();
  clearMessage();
  field.addEventListener('click', startGame);
  field.childNodes.forEach((item) => {
    item.addEventListener('click', cellClick);
    if (theme === 'Light') {
      item.classList.add('dark')
    }
  });
  isGameStarted = false;
  isGameOver = false;
  isGameContinue = false;
  isSolutionShowed = false;
  milisecondsGap = 0;
}

function switchTheme() {
  body.classList.toggle('dark');
  let buttons = document.querySelectorAll('.button');
  buttons.forEach((item) => item.classList.toggle('dark'));
  let cells = document.querySelectorAll('.cell');
  cells.forEach((item) => {
    item.classList.toggle('dark');
    if (item.classList.contains('white')) {
      item.classList.remove('white');
      item.classList.add('black');
    } else if (item.classList.contains('black')) {
      item.classList.remove('black');
      item.classList.add('white');
    }
  });
  gameBoard.classList.toggle('dark');
  topLine.classList.toggle('dark');
  leftLine.classList.toggle('dark');
  if (theme === 'Dark') {
    theme = 'Light';
    if (isGameOver) messageBlock.style.backgroundColor = 'rgba(188, 116, 169, 0.7)';
    soundButton.style.backgroundColor = 'rgb(188, 116, 169)';
  } else {
    theme = 'Dark';
    if (isGameOver) messageBlock.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    soundButton.style.backgroundColor = '';
  }
  switchThemeButton.innerText = `${theme} theme`;
}

function check(userInputArray) {
  let count = 0;
  let result = false;
  for (let i = 0; i < picture.length; i++) {
    for (let j = 0; j < picture[i].length; j++) {
      if (picture[i][j] === userInputArray[i][j]) {
        result = true;
        count++;
      } else {
        count = 0;
      }
    }
  }
  if (count === difficulty ** 2 && result) {
    win();
    return true;
  }
  return false;
}

function win() {
  isGameStarted = false;
  isGameOver = true;
  isListShowed = false;
  field.removeEventListener('click', startGame);
  field.removeEventListener('contextmenu', startGame);
  saveGameButton.classList.add('disabled');
  saveGameButton.removeEventListener('click', saveGame);
  field.childNodes.forEach((item) => {
    item.removeEventListener('click', cellClick);
    item.removeEventListener('contextmenu', cellClick);
  });
  messageBlock.classList.remove('hidden');
  messageBlock.innerText = `Great! You have solved the nonogram in ${Math.floor(milisecondsGap / 1000)} seconds!`;
  if (theme === 'Dark') {
    messageBlock.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
  } else {
    messageBlock.style.backgroundColor = 'rgba(188, 116, 169, 0.7)';
  }
  if (!isSolutionShowed) {
    let puzzle = levelPuzzlesBlock.querySelector('.active');
    if (localStorage.topList) {
      list = `${localStorage.topList}\n`;
    }
    list += `${level} - ${puzzle.classList[2]} - ${counter.innerText}.`;
    let listArray = list.split('.');
    if (listArray.length > 6) {
      listArray.splice(0, 1);
      list = listArray.join('.');
    }
    localStorage.setItem('topList', list.trimStart());
  }
  let sound = document.createElement('audio');
    sound.src = 'assets/sound/win-sound.mp3';
    sound.autoplay = true;
}

function clearMessage() {
  messageBlock.innerText = '';
  messageBlock.style.backgroundColor = '';
  messageBlock.classList.add('hidden');
}

function changePicture(event) {
  let button = event.target;
  if (!button.classList.contains('active')) {
    levelPuzzlesBlock.childNodes.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
  }
  switch(button.classList[2]) {
    case 'Alien':
      picture = puzzleAlien;
      break;
    case 'Rocket':
      picture = puzzleRocket;
      break;
    case 'Dinosaur':
      picture = puzzleDinosaur;
      break;
    case 'Flower':
      picture = puzzleFlower;
      break;
    case 'Tree':
      picture = puzzleTree;
      break;
    case 'SpaceFood':
      picture = puzzleSpaceFood;
      break;
    case 'Martian':
      picture = puzzleMartian;
      break;
    case 'Astronaut':
      picture = puzzleAstronaut;
      break;
    case 'Android':
      picture = puzzleAndroid;
      break;
    case 'Spider':
      picture = puzzleSpider;
      break;
    case 'UFO':
      picture = puzzleUFO;
      break;
    case 'Candy':
      picture = puzzleCandy;
      break;
    case 'City':
      picture = puzzleCity;
      break;
    case 'BigRocket':
      picture = puzzleBigRocket;
      break;
    case 'Robot':
      picture = puzzleRobot;
      break;
  }

  topLine.innerHTML = '';
  leftLine.innerHTML = '';
  field.innerHTML = '';
  counter.innerText = '';
  createGameArea(level, picture);
  clearField();
  clearMessage();
  field.addEventListener('click', startGame);
  field.childNodes.forEach((item) => item.addEventListener('click', cellClick));
  isGameStarted = false;
  isGameOver = false;
  isGameContinue = false;
  isSolutionShowed = false;
  milisecondsGap = 0;
}

function timer(date) {
  let gap = new Date();
  milisecondsGap = gap.getTime() - date.getTime();

  if (localStorage.gap && isGameContinue) {
    milisecondsGap += Number(savedGap);
  }

  let minutes = Math.floor(milisecondsGap / 60000);
  let seconds = Math.floor((milisecondsGap % 60000) / 1000);
  counter.innerText = `${minutes}`.padStart(2, 0) + ':' + `${seconds % 60}`.padStart(2, 0);
}

function startGame(event) {
  if (!isGameStarted) {
    isGameStarted = true;
    let now = new Date();
    if (counter.innerText === '00:00' || counter.innerText === '') {
      counter.innerText = '00:00';
    }
    let intervalID = setInterval(() => {
      if (isGameStarted) {
        timer(now)
      } else {
        clearInterval(intervalID);
      }
    }, 1000);
  }
}

function clearField() {
  isGameStarted = false;
  isGameOver = false;
  field.childNodes.forEach((node) => {
      node.classList.remove('black');
      node.classList.remove('white');
      node.innerText = '';
    }
  )
  userInput.forEach((arr) => {
      arr.fill(0);
    }
  )
  counter.innerText = '00:00';
  saveGameButton.classList.remove('disabled');
  saveGameButton.addEventListener('click', saveGame);
  continueLastGameButton.classList.remove('disabled');
  continueLastGameButton.addEventListener('click', continueGame);
  field.addEventListener('click', startGame);
  field.addEventListener('contextmenu', startGame);
  field.childNodes.forEach((cell) => {
    cell.addEventListener('click', cellClick);
    cell.addEventListener('contextmenu', cellClick);
  });
  savedGap = 0;
  clearMessage();
}

function cellClick(event) {
  let cell = event.target;
  let indexes = cell.classList[1].split('-').slice(1).map((item) => Number(item));
  if (event.button === 0) {
    if (theme === 'Dark') {
      cell.classList.toggle('black');
    } else {
      cell.classList.toggle('white');
    }
    cell.innerText = '';
    if (userInput[indexes[0]][indexes[1]] === 1) {
      userInput[indexes[0]][indexes[1]] = 0;
    } else {
      userInput[indexes[0]][indexes[1]] = 1;
    }
    if (isSoundOn) {
      let sound = document.createElement('audio');
      sound.src = 'assets/sound/left-click-sound.mp3';
      sound.autoplay = true;
    }
    check(userInput);
  }
  if (event.button === 2) {
    if (cell.innerText === 'X') {
      cell.innerText = '';
    } else {
      cell.innerText = 'X';
      userInput[indexes[0]][indexes[1]] = 0;
    }
    cell.classList.remove('black');
    cell.classList.remove('white');
    if (isSoundOn) {
      let sound = document.createElement('audio');
      sound.src = 'assets/sound/right-click-sound.mp3';
      sound.autoplay = true;
    }
  }
}

function fillTopLine (matrix) {
  let count = 0;
  let string = '';
  for (let i = 0; i < matrix.length; i++) {
    let cellWithString = document.createElement('div');
    let span = document.createElement('span');
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[j][i] === 1) {
        count++;
      }
      if (matrix[j][i] === 0 && count !== 0 ) {
        string = string + '\n' + count;
        count = 0;
      }
      else if (count !== 0 && j === matrix[i].length -1) {
        string = string + '\n' + count;
      }
    }
    if (i % 5 === 0) {
      cellWithString.style.borderLeft = '3px solid';
    }
    cellWithString.classList.add('cell', `cell-${i}`);
    if (!cellWithString.classList.contains('dark') && theme === 'Light') {
      cellWithString.classList.add('dark');
    }
    span.innerText = string;
    cellWithString.append(span);
    topLine.append(cellWithString);
    string = '';
    count = 0;
  }
}

function fillLeftLine (matrix) {
  let count = 0;
  let string = '';
  for (let i = 0; i < matrix.length; i++) {
    let cellWithString = document.createElement('div');
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        count++;
      }
      if (matrix[i][j] === 0 && count !== 0 ) {
        string = string + count + ' ';
        count = 0;
      }
      if (count !== 0 && j === matrix[i].length -1) {
        string = string + count;
      }
    }
    if (i % 5 === 0) {
      cellWithString.style.borderTop = '3px solid';
    }
    cellWithString.classList.add('cell', `cell-${i}`);
    if (!cellWithString.classList.contains('dark') && theme === 'Light') {
      cellWithString.classList.add('dark');
    }
    cellWithString.innerText = string;
    leftLine.append(cellWithString);
    string = '';
    count = 0;
  }
}

function createGameArea(level, puzzle) {
  fillTopLine(puzzle);
  fillLeftLine(puzzle);
  switch (level) {
    case 'easy':
      difficulty = 5;
      break;
    case 'medium':
      difficulty = 10;
      break;
    case 'hard':
      difficulty = 15;
      break;
  }
  console.log(`level: ${level}\ndifficulty: ${difficulty}`); // delete
  for (let i = 0; i < difficulty; i++) {
    for (let j = 0; j < difficulty; j++) {
      const cell = createElementInHTML('div', '', 'cell', `cell-${i}-${j}`);
      cell.addEventListener('click', cellClick);
      cell.addEventListener('contextmenu', cellClick);
      field.append(cell);
      if (!cell.classList.contains('dark') && theme === 'Light') {
        cell.classList.add('dark');
      }
      if (i % 5 === 0) {
        cell.style.borderTop = '3px solid';
      }
      if (j % 5 === 0) {
        cell.style.borderLeft = '3px solid';
      }
    }
  }
}

createGameArea(level, picture);