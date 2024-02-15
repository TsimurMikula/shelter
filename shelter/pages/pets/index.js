console.log('1. Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14\n2. Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14\n3. Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14\n4. Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6\n5. Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6\n6. Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6\n7. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20\n8. Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции (Примеры неправильной и правильной реализации): +8\n9. При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4\n10. Верстка обеих страниц валидная: +8');
import sliderCards from "./pets.json" assert { type: "json" };

//Burger menu start
(function () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header-nav');
    const blackOut = document.querySelectorAll('.header-logo__title, .header-logo__subtitle, .ourfriends');
    const headerBlackOut = document.querySelector('.header-wrapper');
    const noScroll = document.querySelector('body');
    const menuLinks = document.querySelectorAll('.header-item__link');
    
    burger.addEventListener('click', () => {
        menu.classList.toggle('header-nav-active');
        burger.classList.toggle('burger-active');
        blackOut.forEach(e => e.classList.toggle('blackOut-effect'));
        headerBlackOut.classList.toggle('header-blackOut');
        noScroll.classList.toggle('body-no-scroll');
    });
    
    for (let i = 0; i < menuLinks.length; i += 1) {
        menuLinks[i].addEventListener('click', () => {
            menu.classList.remove('header-nav-active');
            burger.classList.toggle('burger-active');
            blackOut.forEach(e => e.classList.remove('blackOut-effect'));
            headerBlackOut.classList.remove('header-blackOut');
            noScroll.classList.remove('body-no-scroll');
        });    
    }

    document.addEventListener("click", (e) => {
        if (menu.classList.contains('header-nav-active') && !burger.contains(e.target)  && !menu.contains(e.target)) {
            menu.classList.remove('header-nav-active');
            burger.classList.toggle('burger-active');
            blackOut.forEach(e => e.classList.remove('blackOut-effect'));
            headerBlackOut.classList.remove('header-blackOut');
            noScroll.classList.remove('body-no-scroll');
        }
    });

}());
//Burger menu end

//Pagination start
(function () {
  const cards = document.querySelector('.ourfriends-slider');
  const buttons = document.querySelector(".ourfriends-buttons");
  const btnNext = document.querySelector(".ourfriends-button-right");
  const btnPrev = document.querySelector(".ourfriends-button-left");
  const currentPage = document.querySelector(".ourfriends-button-current");
  const btnFirst = document.querySelector(".ourfriends-button-left-long");
  const btnLast = document.querySelector(".ourfriends-button-right-long");

  function posCardsOnPage() {
    const result = [];
    let arr = [];
    for (let i = 0; i < 6; i++) {
      while (true) {
        let r = Math.floor(Math.random() * 8);
        if (arr.length == 8) break;
        else if (!arr.includes(r)) arr.push(r);
      }
      result.push(arr);
      arr = [];
    }
    return result;
  }  

  const randomPosCards = posCardsOnPage();

  const createCard = (i, j, randomArrays) => {
    const card = document.createElement("div");
    card.classList.add("ourfriends-card");

    const cardImg = document.createElement("img");
    cardImg.classList.add("ourfriends-card__img");
    cardImg.src = `${sliderCards[randomArrays[i][j]].img}`;
    card.append(cardImg);

    const cardName = document.createElement("h3");
    cardName.classList.add("ourfriends-card__name");
    cardName.innerText = sliderCards[randomArrays[i][j]]["name"];
    card.classList.add(`${sliderCards[randomArrays[i][j]]["name"]}`);
    card.append(cardName);

    const cardBtn = document.createElement("button");
    cardBtn.classList.add("ourfriends-card__button");
    cardBtn.innerText = "Learn more";
    card.append(cardBtn);

    return card;
  };

  function pagination(e) {
    if (e.target.closest(".ourfriends-button-right")) {
      cards.innerHTML = "";
      if (countClick < 5) {
        countClick += 1;
        currentPage.textContent = countClick + 1;
      }
      for (let j = 0; j < 8; j++) {
        const card = createCard(countClick, j, randomPosCards);
        cards.appendChild(card);
      }
    }

    if (e.target.closest(".ourfriends-button-left")) {
      cards.innerHTML = "";
      if (countClick > 0) {
        countClick -= 1;
        currentPage.textContent = countClick + 1;
      }
      for (let j = 0; j < 8; j++) {
        const card = createCard(countClick, j, randomPosCards);
        cards.appendChild(card);
      }
    }

    if (e.target.closest(".ourfriends-button-left-long")) {
      cards.innerHTML = "";
      countClick = 0;
      currentPage.textContent = countClick + 1;

      for (let j = 0; j < 8; j++) {
        const card = createCard(countClick, j, randomPosCards);
        cards.appendChild(card);
      }
    }

    if (e.target.closest(".ourfriends-button-right-long")) {
      cards.innerHTML = "";
      countClick = 5;
      currentPage.textContent = countClick + 1;

      for (let j = 0; j < 8; j++) {
        const card = createCard(countClick, j, randomPosCards);
        cards.appendChild(card);
      }
    }
  }

  function btnInteractivity() {
    if (countClick === 0) {
      btnPrev.classList.remove("ourfriends-button__hvr");
      btnFirst.classList.remove("ourfriends-button__hvr");
      btnPrev.classList.add("ourfriends-button-inactive");
      btnFirst.classList.add("ourfriends-button-inactive");
      
    }
    if (countClick === 5) {
      btnNext.classList.remove("ourfriends-button__hvr");
      btnLast.classList.remove("ourfriends-button__hvr");
      btnNext.classList.add("ourfriends-button-inactive");
      btnLast.classList.add("ourfriends-button-inactive");
    }
    if (countClick !== 0) {
      btnPrev.classList.add("ourfriends-button__hvr");
      btnFirst.classList.add("ourfriends-button__hvr");
      btnPrev.classList.remove("ourfriends-button-inactive");
      btnFirst.classList.remove("ourfriends-button-inactive");
    }
    if (countClick !== 5) {
      btnNext.classList.add("ourfriends-button__hvr");
      btnLast.classList.add("ourfriends-button__hvr");
      btnNext.classList.remove("ourfriends-button-inactive");
      btnLast.classList.remove("ourfriends-button-inactive");
    }
  } 

  cards.innerHTML = '';
  for (let j = 0; j < 8; j++) {
    const card = createCard(0, j, randomPosCards);
    cards.appendChild(card);
  }    

  let countClick = 0;  
  buttons.addEventListener('click', (e) => {
    pagination(e);
    btnInteractivity();
  })
}());


//Pagination end

//Popup start

(function () {
    const overlay = document.querySelector('.popup-overlay');
    const close = document.querySelector('.popup-close');
    const cards = document.querySelector('.ourfriends-slider');
    const noScroll = document.querySelector('body');
    const content = document.querySelector(".popup-content");
  
    cards.addEventListener('click', (e) => {
      let currCard = e.target.closest('.ourfriends-card');
      let cardAttr = currCard.classList[1];
        if (e.target.closest('.ourfriends-card')) {
          overlay.classList.add('popup-overlay__active');
          noScroll.classList.add('body-no-scroll');
          createPopup(cardAttr);
      }
    })
    
    function createPopup(cardAttr) {
      for (let i = 0; i < sliderCards.length; i++) {
        if (sliderCards[i].name === cardAttr) {
         content.insertAdjacentHTML('beforeend', `
                <div class="content-img">
                  <img src="${sliderCards[i].imgPopup}" alt="pets" class="content-img__img">
                </div>
                <div class="content-description">
                  <h3 class="content-description__title">${sliderCards[i].name}</h3>
                  <p class="content-description__subtitle">${sliderCards[i].type + '-' + sliderCards[i].breed}</p>
                  <p class="content-description__description">${sliderCards[i].description}</p>
                  <div class="content-description__age">
                    <img src="./assets/img/svg/dot.svg" alt="dot" class="description__img">
                    <b>Age:</b> <span class="description-age">${sliderCards[i].age}</span>
                  </div>
                  <div class="content-description__inoculations">
                    <img src="./assets/img/svg/dot.svg" alt="dot" class="description__img">
                    <b>Inoculations:</b> <span class="description-inoculations">${sliderCards[i].inoculations[0]}</span>
                  </div>
                  <div class="content-description__diseases">
                    <img src="./assets/img/svg/dot.svg" alt="dot" class="description__img">
                    <b>Diseases:</b> <span class="description-diseases">${sliderCards[i].diseases[0]}</span>
                  </div>
                  <div class="content-description__parasites">
                    <img src="./assets/img/svg/dot.svg" alt="dot" class="description__img">
                    <b>Parasites:</b> <span class="description-parasites">${sliderCards[i].parasites[0]}</span>
                  </div>
                </div>
        `);
        }
      }
    }
    
    overlay.addEventListener('click', (e) => {
      if (e.target.classList.contains('popup-overlay')) {
        overlay.classList.remove('popup-overlay__active');
        noScroll.classList.remove("body-no-scroll");
        content.innerHTML = "";
      }
    });
  
    close.addEventListener('click', () => {
      overlay.classList.remove('popup-overlay__active');
      noScroll.classList.remove("body-no-scroll");
      content.innerHTML = "";
    });
  
  }());
  //Popup end
