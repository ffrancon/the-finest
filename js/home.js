//-- Blocs de la section Events en page d'accueil
const eventCts = document.querySelectorAll('.home-events__box-content');
const eventCtsItems = [...eventCts];

eventCtsItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    if (document.body.clientWidth > 768) {
      item.querySelector('.home-events__box-overlay').style.opacity = '1';
      item.querySelector('.home-events__img').style.transform = 'scale(1.1)';
    }
  })
  item.addEventListener('mouseout', () => {
    if (document.body.clientWidth > 768) {  
      item.querySelector('.home-events__box-overlay').style.opacity = null;
      item.querySelector('.home-events__img').style.transform = 'scale(1)';
    }
  })
});