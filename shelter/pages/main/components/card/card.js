import { validPet } from '../pet/pet';
import './card.css';
import * as Pet from './pet/pet';





const TEXT_BTN = 'Learn more'

function createComponent (pet) {
    Pet.validPet(pet);
  
    const component = createElement('div', CssClasses.SLIDER);
  
    const btnL = createElement('img', CssClasses.BTNL);
    const btnR = createElement('img', CssClasses.BTNR);
  
    const sliderWrap = createElement('div', CssClasses.WRAPPER);
    const cardContainer = createElement('div', CssClasses.CARD_CONTAINER);
  
  
    return component;
  }

  export { createComponent };