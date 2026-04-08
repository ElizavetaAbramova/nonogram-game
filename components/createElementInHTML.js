export function createElementInHTML(tag, text, ...classes) {
  let element = document.createElement(tag);
  classes.map((item) => element.classList.add(item));
  element.innerText = text;
  return element;
}
