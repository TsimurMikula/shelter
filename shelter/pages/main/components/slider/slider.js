import './slider.css'
const CssClasses = {
  SLIDER: 'ourfriends-slider',
  BTNL: 'arrow-left',
  BTNR: 'arrow-right',
  WRAPPER: 'slider-wrapper',
  CARD_CONTAINER: 'slider'


}

let COUNT_CARD = 3;
const COUNT_CARD_BLOCK = 3;

function createComponent (petsJSON) {
  if (!Array.isArray(petsJSON)) throw new Error ('Pets array is invalid!');

  const component = createElement('div', CssClasses.SLIDER);

  const btnL = createElement('img', CssClasses.BTNL);
  const btnR = createElement('img', CssClasses.BTNR);

  const sliderWrap = createElement('div', CssClasses.WRAPPER);
  const cardContainer = createElement('div', CssClasses.CARD_CONTAINER);


  return component;
}

function createElement (tagName, className) {
    const elem = document.createElement(tagName);
    elem.classList.add(className);
    return elem;
}

export { createComponent };