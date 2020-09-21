//-- Sélecion du menu affiché en version desktop
const menusSelectors = document.querySelectorAll('.menus-menus__menu-select');
for (let i = 0; i < menusSelectors.length; i++) {
  menusSelectors[i].addEventListener('click', () => {
    const current = document.querySelector('.menus-menus__menu-ct--active');
    const clicked = document.getElementById(`menu${i+1}`);

    current.classList.remove('menus-menus__menu-ct--active');
    current.classList.add('menus-menus__menu-ct--hidden');
    clicked.classList.remove('menus-menus__menu-ct--hidden');
    clicked.classList.add('menus-menus__menu-ct--active');
  })
}

//-- Slider version desktop : boutons pour faire défiler les images
const firstSlideBtn = document.getElementById('slide1');
const secondSlideBtn = document.getElementById('slide2');
const thirdSlideBtn = document.getElementById('slide3');
const slider = document.getElementById('slider');

firstSlideBtn.addEventListener('click', () => {
  if (!firstSlideBtn.classList.contains('menus-main__slider-btn--active')) {
    slider.style.transform = 'translateX(0)';
    
    if (secondSlideBtn.classList.contains('menus-main__slider-btn--active')) {
      secondSlideBtn.classList.remove('menus-main__slider-btn--active');
    }
    else if (thirdSlideBtn.classList.contains('menus-main__slider-btn--active')) {
      thirdSlideBtn.classList.remove('menus-main__slider-btn--active');
    }

    firstSlideBtn.classList.add('menus-main__slider-btn--active');
  }
});

secondSlideBtn.addEventListener('click', () => {
  if (!secondSlideBtn.classList.contains('menus-main__slider-btn--active')) {
    slider.style.transform = 'translateX(-33.34%)';
    
    if (firstSlideBtn.classList.contains('menus-main__slider-btn--active')) {
      firstSlideBtn.classList.remove('menus-main__slider-btn--active');
    }
    else if (thirdSlideBtn.classList.contains('menus-main__slider-btn--active')) {
      thirdSlideBtn.classList.remove('menus-main__slider-btn--active');
    }

    secondSlideBtn.classList.add('menus-main__slider-btn--active');
  }
});

thirdSlideBtn.addEventListener('click', () => {
  if (!thirdSlideBtn.classList.contains('menus-main__slider-btn--active')) {
    slider.style.transform = 'translateX(-66.67%)';
    
    if (firstSlideBtn.classList.contains('menus-main__slider-btn--active')) {
      firstSlideBtn.classList.remove('menus-main__slider-btn--active');
    }
    else if (secondSlideBtn.classList.contains('menus-main__slider-btn--active')) {
      secondSlideBtn.classList.remove('menus-main__slider-btn--active');
    }

    thirdSlideBtn.classList.add('menus-main__slider-btn--active');
  }
});

//-- Slider version mobile (tactile) : défilement des images en drag gauche/droite

// Calcul de la position du slider et du mouvement de la souris pour défiler vers la bonne image
let posX = 0;
const mouseMove = (event) => {
  const sliderCtX = document.getElementById('slider-ct').getBoundingClientRect().x;
  const firstSlide = document.getElementById('first-slide');
  const fsx = firstSlide.getBoundingClientRect().x;
  if (event.clientX < posX - 10) {
    if (fsx === sliderCtX) {
      setTimeout(() => { slider.style.transform = 'translateX(-33.34%)' }, 350);
    }
    else if (fsx < sliderCtX && fsx > sliderCtX - 899) {
      setTimeout(() => { slider.style.transform = 'translateX(-66.67%)' }, 350);
    }
  }
  else if (event.clientX > posX + 10) {
    if (fsx < sliderCtX && fsx < sliderCtX - 899) {
      setTimeout(() => { slider.style.transform = 'translateX(-33.34%)' }, 350);
    }
    else if (fsx < sliderCtX && fsx > sliderCtX - 899) {
      setTimeout(() => { slider.style.transform = 'translateX(0)' }, 350);
    }
  }
}

const mouseUp = () => {
  window.removeEventListener('mousemove', mouseMove);
}

const mouseDown = event => {
  posX = event.clientX;
  window.addEventListener('mousemove', mouseMove);
}

slider.addEventListener('mousedown', mouseDown);
window.addEventListener('mouseup', mouseUp);
